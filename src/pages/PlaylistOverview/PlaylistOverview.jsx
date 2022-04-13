import React, { useContext } from "react";
import "./PlaylistOverview.css";
import { DataContext } from "../../context/dataContext";
import Track from "../../components/Track/Track";
import Button from "../../components/Button/Button";

const PlaylistOverview = () => {
  const dataContext = useContext(DataContext);
  const { tracksData } = dataContext;

  return (
    <div className="playlist">
      <Button text="< Go Back" />

      <div className="playlist_title">
        <h3>Title</h3>
        <h3>Artist</h3>
        <h3>Album</h3>
      </div>

      {tracksData.length &&
        tracksData.map((track) => (
          <Track
            song={track.track.name}
            artist={track.track.artists[0].name}
            img={track.track.album.images[0].url}
            album={track.track.album.name}
            key={track.track.id}
          />
        ))}
    </div>
  );
};

export default PlaylistOverview;
