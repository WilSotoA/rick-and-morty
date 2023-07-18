import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
const { REACT_APP_SERVER_URL } = process.env;

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${REACT_APP_SERVER_URL}rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className="container-card">
        <div className="container-info">
            <h1>Name: {character?.name}</h1>
            <h3>Status: {character?.status}</h3>
            <h3>Specie: {character?.species}</h3>
            <h3>Gender: {character?.gender}</h3>
            <h3>Origin: {character?.origin}</h3>
        </div>
        <div className="container-image">
            <img src={character?.image} alt={character.name+" image"} />
        </div>
    </div>
  );
}
