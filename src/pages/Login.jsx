import React from "react";
import LoginButton from "../components/Buttons/LoginButton";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login_window">
      <h1 className="login_text">
        Hi 👋 <br />
        Login with your Spotify account to continue
      </h1>
      <LoginButton />
    </div>
  );
};

export default Login;
