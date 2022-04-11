import React from "react";
import style from "./Buttons.css";

const LoginButton = ({ login }) => {
  return (
    <button className="button" onClick={login}>
      Login to Spotify
    </button>
  );
};

export default LoginButton;
