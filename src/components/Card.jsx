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
  const {
    image,
    name,
    description,
    playlist,
    setSelectedPlaylist,
    followers,
    genre,
  } = props;

  return (
    <div className="card" onClick={() => setSelectedPlaylist(playlist)}>
      {image && (
        <img className="card_image" src={image} alt={name + " cover"} />
      )}
      <h1 className="card_name">{name}</h1>
      {description && <p className="card_description">{description}</p>}
      {genre && (
        <ul>
          {genre.map((gen, i) => (
            <li key={name + gen + i}>{gen}</li>
          ))}
        </ul>
      )}
      {followers && <p className="card_description">FOLLOWERS: {followers}</p>}
    </div>
  );
};

export default Card;
