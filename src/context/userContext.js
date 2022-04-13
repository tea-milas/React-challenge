import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

const UserProvider = (props) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const REDIRECT_URI = "http://localhost:8080/";
  const CLIENT_ID = "8d3bafe7e5ea4d8594a4a93b33310358";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const urlParams = new URLSearchParams(
        window.location.hash.replace("#", "?")
      );

      token = urlParams.get("access_token");
    }

    setToken(token);
  }, []);

  const login = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        setToken,
        token,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
