import React, { useState } from "react";
import Card from "../Card/Card";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

export default function Favorites({ onClose }) {
  const [aux, setAux] = useState(false);
  const { myFavorites } = useSelector((state) => state);
  const dispath = useDispatch();

  function handleOrder(e) {
    dispath(orderCards(e.target.value));
    aux ? setAux(false) : setAux(true);
  }

  function handleFilter(e) {
    dispath(filterCards(e.target.value));
  }

  return (
    <>
      <div className="container-favorites">
        <select name="ordenAD" id="ordenAD" onChange={handleOrder}>
          <option value="">Select Order: </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="ordenGender" id="ordenGender" onChange={handleFilter}>
          <option value="">Select Filter: </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>

        <button
          className="Nav-button"
          value="allCharacters"
          onClick={handleFilter}
        >
          All characters
        </button>
      </div>
      <h1 className="title">Favorites</h1>
      <div className="cards-container">
        {myFavorites &&
          myFavorites.map((myFavorite) => {
            return (
              <div key={myFavorite.id}>
                <Card
                  id={myFavorite.id}
                  name={myFavorite.name}
                  status={myFavorite.status}
                  species={myFavorite.species}
                  gender={myFavorite.gender}
                  origin={myFavorite.origin}
                  image={myFavorite.image}
                  onClose={onClose}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
