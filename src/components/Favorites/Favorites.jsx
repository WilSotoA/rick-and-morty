import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

export function Favorites({ myFavorites, onClose }) {
  return (
    <>
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
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps, null)(Favorites);
