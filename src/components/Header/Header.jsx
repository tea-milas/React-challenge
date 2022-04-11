import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import logo from "../../assets/fxdigitallogo.png";
import LogoutButton from "../Buttons/LogoutButton";
import LoginButton from "../Buttons/LoginButton";
import HomeButton from "../Buttons/HomeButton";
import SearchButton from "../Buttons/SearchButton";
import "./Header.css";

export const Header = () => {
  const userContext = useContext(UserContext);
  const { token, logout } = userContext;
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div className="buttons">
          {token ? (
            <>
              <SearchButton /> <HomeButton /> <LogoutButton logout={logout} />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
