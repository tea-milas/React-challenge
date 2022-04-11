import React from "react";
import "./Track.css";

const Track = (props) => {
  const { song, artist, img, album } = props;
  return (
    <div className="track">
      <img src={img} alt={artist + "-" + album} className="track_image" />
      <p className="track_info">{song}</p>
      <p className="track_info">{artist}</p>
      <p className="track_info">{album}</p>
    </div>
  );
};

export default Track;
