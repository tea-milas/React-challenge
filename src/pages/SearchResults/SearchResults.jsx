import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import BackButton from "../../components/Buttons/BackButton";
import Card from "../../components/Card/Card";
import "../Home/Home.css";

const SearchResults = () => {
  const dataContext = useContext(DataContext);
  const { searchResult } = dataContext;

  return (
    <>
      <BackButton />

      <h3 className="home_title">Search results</h3>
      <div className="cards_wrapper ">
        {searchResult &&
          searchResult.map((artist) => (
            <Card
              image={artist.images && artist.images[0] && artist.images[0].url}
              name={artist.name}
              followers={artist.followers.total}
              genres={artist.genres}
              key={artist.id}
            />
          ))}
      </div>
    </>
  );
};

export default SearchResults;
