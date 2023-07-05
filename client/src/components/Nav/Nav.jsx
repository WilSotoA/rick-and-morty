import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { resetCharacters } from "../../redux/actions";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav({ onSearch, logout }) {
  const [burguerClass, setBurguerClass] = useState("burguer-item unclicked");
  const [menuClass, setMenuClass] = useState("burguer-nav disabled");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const dispatch = useDispatch();

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurguerClass("burguer-item clicked");
      setMenuClass("burguer-nav");

    } else {
      setBurguerClass("burguer-item unclicked");
      setMenuClass("burguer-nav disabled");
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
    <div className="Nav">
      <Link to={"/home"}>
        <button
          onClick={() => dispatch(resetCharacters())}
          className="Nav-button Nav-button-home"
        >
          Home
        </button>
      </Link>
      <Link to={"/About"}>
        <button className="Nav-button">About</button>
      </Link>
      <Link to={"/favorites"}>
        <button className="Nav-button">Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button className="Nav-button" onClick={logout}>
        Log Out
      </button>
      <div className="burguer-menu" onClick={updateMenu}>
        <div className={burguerClass}></div>
        <div className={burguerClass}></div>
        <div className={burguerClass}></div>
      </div>
    </div>
    <nav className={menuClass}>
      <Link to={"/About"}>
        <button className="Nav-button">About</button>
      </Link>
      <Link to={"/favorites"}>
        <button className="Nav-button">Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button className="Nav-button" onClick={logout}>
        Log Out
      </button>
      </nav>
    </>
  );
}
