import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Buttons.css";

const LoginButton = () => {
  const userContext = useContext(UserContext);
  const { login } = userContext;
  return (
    <button className="button" onClick={login}>
      Login to Spotify
    </button>
  );
};

export default LoginButton;
