import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

export const DataContext = createContext({});

const DataProvider = (props) => {
  let navigate = useNavigate();

  const userContext = useContext(UserContext);
  const { token } = userContext;

  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [featuredPlaylists, setFeaturedPlaylists] = useState({});
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [tracksData, setTracksData] = useState({});

  const searchArtists = (e) => {
    e.preventDefault();

    fetch(
      "https://api.spotify.com/v1/search?type=artist&limit=10&q=" + searchKey,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        response
          .json()
          .then((data) => {
            setSearchResult(data.artists.items);
          })
          .then(() => navigate("/search-results"));
      })
      .catch((error) => console.log(error));
  };

  console.log(searchResult);

  const getFeaturedPlaylists = () => {
    fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?country=GB&limit=10",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          setFeaturedPlaylists(data);
        });
      })
      .catch((error) => console.log(error));
  };

  const getTracks = (url, id) => {
    fetch(url + "?&limit=10", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            setTracksData(data.items);
          })
          .then(() => navigate("/playlist/" + id));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (token) {
      getFeaturedPlaylists();
    }
  }, [token]);

  useEffect(() => {
    if (selectedPlaylist) {
      getTracks(selectedPlaylist.tracks.href, selectedPlaylist.id);
    }
  }, [selectedPlaylist]);

  return (
    <DataContext.Provider
      value={{
        getFeaturedPlaylists,
        featuredPlaylists,
        setSelectedPlaylist,
        getTracks,
        tracksData,
        selectedPlaylist,
        searchArtists,
        setSearchKey,
        searchResult,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
