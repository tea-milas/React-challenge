import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

const useData = () => {
  const userContext = useContext(UserContext);
  const { token } = userContext;

  const [featuredPlaylists, setFeaturedPlaylists] = useState({});
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const searchArtists = (e) => {
    fetch("");
  };

  const goToPlaylist = () => {};

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

  const getTracks = (url) => {
    fetch(url + "?&limit=10", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setFeaturedPlaylists(data);
          console.log("track data", data);
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFeaturedPlaylists();
  }, [token]);

  useEffect(() => {
    getTracks(selectedPlaylist);
  }, [selectedPlaylist]);

  return { getFeaturedPlaylists, featuredPlaylists, setSelectedPlaylist };
};

export default useData;
