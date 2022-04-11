import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import "./Buttons.css";

const SearchButton = () => {
  const dataContext = useContext(DataContext);
  const { setSearchKey, searchArtists } = dataContext;

  return (
    <form onSubmit={searchArtists}>
      <input
        className="search"
        type="text"
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search artists..."
      />
      <button className="button button--search" type="submit">
        🔎
      </button>
    </form>
  );
};

export default SearchButton;
