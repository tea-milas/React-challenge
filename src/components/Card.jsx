import React from "react";
import style from "./Card.css";
/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = (props) => {
  const { image, name, description, id, tracksUrl, setSelectedPlaylist } =
    props;
  return (
    <div
      key={id}
      className="card"
      onClick={() => setSelectedPlaylist(tracksUrl)}
    >
      <img className="card_image" src={image} alt={name + " cover"} />
      <h1 className="card_name">{name}</h1>
      <p className="card_description">{description}</p>
    </div>
  );
};

export default Card;
