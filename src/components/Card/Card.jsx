import "./Card.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
export function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image});
    }
  }
  return (
    <div className="Card">
      {isFav ? (
        <button
          className="button-favorite button-favorite-favorite"
          onClick={handleFavorite}
        >
          ❤️
        </button>
      ) : (
        <button className="button-favorite" onClick={handleFavorite}>
          🤍
        </button>
      )}
      <button className="button-close" onClick={() => onClose(id)}>
        X
      </button>
      <Link className="card-link" to={`/detail/${id}`}>
        <h2 className="Card-name">{name}</h2>
      </Link>
      <div className="container-text">
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
      <img className="image-character" src={image} alt="Character Img" />
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
