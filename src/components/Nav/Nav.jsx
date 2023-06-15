import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav({ onSearch }) {
  return (
    <div className="Nav">
      <Link to={"/home"}>
        <button className="Nav-button Nav-button-home">Home</button>
      </Link>
      <Link to={"/About"}>
        <button className="Nav-button">About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
