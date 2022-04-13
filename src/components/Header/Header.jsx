import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import logo from "../../assets/fxdigitallogo.png";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = () => {
  const userContext = useContext(UserContext);
  const { token } = userContext;
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div className="buttons">
          {token ? (
            <>
              <SearchBar /> <Button text="Home" /> <Button text="Logout" />
            </>
          ) : (
            <Button text="Login" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
