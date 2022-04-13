import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import "./SearchBar.css";

const SearchBar = () => {
  const dataContext = useContext(DataContext);
  const { setSearchKey, searchArtists } = dataContext;

  return (
    <form onSubmit={searchArtists} className="search">
      <input
        className="search_input"
        type="text"
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search artists..."
      />
      <button className="search_button" type="submit">
        🔎
      </button>
    </form>
  );
};

export default SearchBar;
