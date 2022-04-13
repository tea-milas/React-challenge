import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Login from "../Login/Login";
import { UserContext } from "../../context/userContext";
import { DataContext } from "../../context/dataContext";
import "./Home.css";

export const Home = () => {
  const userContext = useContext(UserContext);
  const { token } = userContext;
  const dataContext = useContext(DataContext);
  const {
    featuredPlaylists,
    setSelectedPlaylist,
    selectedPlaylist,
    getTracks,
  } = dataContext;

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
                  setSelectedPlaylist={setSelectedPlaylist}
                  selectedPlaylist={selectedPlaylist}
                  getTracks={getTracks}
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
