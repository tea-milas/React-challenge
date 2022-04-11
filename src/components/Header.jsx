import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import LogoutButton from "./Buttons/LogoutButton";
import LoginButton from "./Buttons/LoginButton";
import { UserContext } from "../context/userContext";
import HomeButton from "./Buttons/HomeButton";

export const Header = () => {
  const userContext = useContext(UserContext);
  const { token, login, logout } = userContext;
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div className="buttons">
          <Link to="/">
            <HomeButton />
          </Link>
          {token ? (
            <LogoutButton logout={logout} />
          ) : (
            <LoginButton login={login} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
