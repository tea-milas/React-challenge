import React from "react";
import "./Card.css";
/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = (props) => {
  const { image, name, description, playlist, setSelectedPlaylist } = props;
  return (
    <div className="card" onClick={() => setSelectedPlaylist(playlist)}>
      <img className="card_image" src={image} alt={name + " cover"} />
      <h1 className="card_name">{name}</h1>
      <p className="card_description">{description}</p>
    </div>
  );
};

export default Card;
