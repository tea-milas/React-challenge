import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const [token, setToken] = useState("");

  const REDIRECT_URI = "http://localhost:8080/";
  const CLIENT_ID = "";
  const CLIENT_SECRET = "";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      let urlParams = new URLSearchParams(
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
  };

  console.log(token);

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
