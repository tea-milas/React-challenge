import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./SearchResults.css";

const SearchResults = () => {
  const dataContext = useContext(DataContext);
  const { searchResult } = dataContext;

  return (
    <div className="search_results">
      <Button text="< Go Back" />

      <h3 className="title">Search results</h3>
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
    </div>
  );
};

export default SearchResults;
