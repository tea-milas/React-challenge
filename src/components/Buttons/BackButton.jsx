import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const BackButton = () => {
  return (
    <Link to="/">
      <button className="button button--back">{"<"} Go back </button>
    </Link>
  );
};

export default BackButton;
