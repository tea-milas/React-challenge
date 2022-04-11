import React, { useContext } from "react";
import Card from "../components/Card";
import Login from "./Login";
import { UserContext } from "../context/userContext";
import "./Home.css";
import { DataContext } from "../context/dataContext";

export const Home = () => {
  const userContext = useContext(UserContext);
  const { token } = userContext;
  const dataContext = useContext(DataContext);
  const { featuredPlaylists, getTracks, setSelectedPlaylist } = dataContext;

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          <h1 className="home_title">{featuredPlaylists.message}</h1>
          <div className="cards_wrapper">
            {featuredPlaylists.playlists &&
              featuredPlaylists.playlists.items.map((playlist) => (
                <Card
                  playlist={playlist}
                  image={playlist.images[0].url}
                  name={playlist.name}
                  description={playlist.description}
                  tracksUrl={playlist.tracks.href}
                  getTracks={getTracks}
                  setSelectedPlaylist={setSelectedPlaylist}
                  key={playlist.id}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
