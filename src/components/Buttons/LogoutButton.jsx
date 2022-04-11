import React from "react";
import style from "./Buttons.css";

const LogoutButton = ({ logout }) => {
  return (
    <button className="button" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
