import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useBasketState } from "../StateProvider";

function Header() {
  const [{ basket }] = useBasketState();
  return (
    <div className="header__main">
      <Link to="/">
        <div className="header__logo">
          <LocalLibraryIcon className="header__name" />
          <p className="header__name"> Athena </p>
        </div>
      </Link>

      <div className="header__input">
        <input
          className="header__inputOption"
          type="text"
          placeholder="Search for a book.."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__options">
        <Link to="/login">
          <div className="header__optionsElements">
            <span className="header__optionsLineOne">Hello,</span>
            <span className="header__optionsLineTwo">Sign In </span>
          </div>
        </Link>

        <div className="header__optionsElements">
          <span className="header__optionsLineOne">View, </span>
          <span className="header__optionsLineTwo">Orders </span>
        </div>
        <Link to="/checkout">
          <div className="header__basket">
            <ShoppingCartIcon className="header__basketOption" />
            <span className="header__basketItems">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
