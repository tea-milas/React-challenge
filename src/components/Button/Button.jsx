import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text }) => {
  const userContext = useContext(UserContext);
  const { login, logout } = userContext;

  return (
    <>
      {text === "Login" || text === "Logout" ? (
        <button className="button" onClick={text === "Login" ? login : logout}>
          {text}
        </button>
      ) : (
        <Link to="/">
          <button className="button button--back">{text}</button>
        </Link>
      )}
    </>
  );
};

export default Button;
