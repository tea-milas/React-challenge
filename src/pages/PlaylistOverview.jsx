import React from "react";
import Track from "../components/Track";

const PlaylistOverview = () => {
  return (
    <div>
      <h3>Title</h3>
      <h3>Artist</h3>
      <h3>Album</h3>
      <Track name={name} artist={artist} img={img} album={album} />
    </div>
  );
};

export default PlaylistOverview;
