import React from "react";
import "./Buttons.css";

const LogoutButton = ({ logout }) => {
  return (
    <button className="button" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
