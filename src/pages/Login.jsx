import React, { useState, useEffect } from "react";
import LoginButton from "../components/Buttons/LoginButton";
import styles from "./Login.css";

export const Login = () => {
  return (
    <div className="login_page">
      <h1>Hi, login with your Spotify account to continue</h1>
      <LoginButton />
    </div>
  );
};

export default Login;
