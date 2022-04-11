import React from "react";

const Track = (props) => {
  const { name, artist, img, album } = props;
  return (
    <div>
      <img src={img} alt={artist + "-" + album} />
    </div>
  );
};

export default Track;
