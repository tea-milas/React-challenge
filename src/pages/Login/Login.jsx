import React from "react";
import "./Login.css";
import Button from "../../components/Button/Button";

export const Login = () => {
  return (
    <div className="login_window">
      <h1 className="login_text">
        Hi 👋 <br />
        Login with your Spotify account to continue
      </h1>
      <Button text="Login" />
    </div>
  );
};

export default Login;
