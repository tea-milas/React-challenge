import React, { useContext } from "react";
import Card from "../components/Card";
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import Login from "./Login";
import { UserContext } from "../context/userContext";
import useData from "../hooks/useData";
import style from "./Home.css";

export const Home = () => {
  const userContext = useContext(UserContext);
  const { token } = userContext;
  const { getFeaturedPlaylists, featuredPlaylists, setSelectedPlaylist } =
    useData();

  return (
    <>
      {featuredPlaylists && (
        <h1 className="home_title">{featuredPlaylists.message}</h1>
      )}

      {!token ? (
        <Login />
      ) : (
        <div className="cards_wrapper">
          {featuredPlaylists &&
            featuredPlaylists.playlists &&
            featuredPlaylists.playlists.items.map((playlist, i) => (
              <Card
                image={playlist.images[0].url}
                name={playlist.name}
                description={playlist.description}
                id={playlist.id}
                tracksUrl={playlist.tracks.href}
                setSelectedPlaylist={setSelectedPlaylist}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Home;
