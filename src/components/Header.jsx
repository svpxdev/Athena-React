import React from "react";
import "./Header.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header__main">
      <div className="header__logo">
        <LocalLibraryIcon className="header__name" />
        <p className="header__name"> Athena </p>
      </div>

      <div className="header__input">
        <input
          className="header__inputOption"
          type="text"
          placeholder="Search for a book.."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__options">
        <div className="header__optionsElements">
          <span className="header__optionsLineOne">Hello, </span>
          <span className="header__optionsLineTwo">Suryaveer </span>
        </div>
        <div className="header__optionsElements">
          <span className="header__optionsLineOne">View, </span>
          <span className="header__optionsLineTwo">Orders </span>
        </div>
        <div className="header__basket">
          <ShoppingCartIcon className="header__basketOption" />
          <span className="header__basketItems">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
