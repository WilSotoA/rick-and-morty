import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { resetCharacters } from "../../redux/actions";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav({ onSearch, logout }) {
  const dispatch = useDispatch();
  return (
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
      <div className="burguer-menu">
        <div className="burguer-item"></div>
        <div className="burguer-item"></div>
        <div className="burguer-item"></div>
      </div>
    </div>
  );
}
