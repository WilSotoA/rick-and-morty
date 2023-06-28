import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import "./Cards.css";
import { useSelector } from "react-redux";

export default function Cards({ onClose }) {
  const [cantPage, setCantPage] = useState(1);
  const { characters, numPage, numCards } = useSelector((state) => state);
  const from = (numPage - 1) * numCards;
  const to = numPage * numCards;
  useEffect(
    () => setCantPage(Math.floor(characters.length / numCards) + 1),
    [characters, numCards, setCantPage]
  );
  const viewCharacters = characters.slice(from, to);
  return (
    <>
      <div className="cards-container">
        {viewCharacters &&
          viewCharacters.map((characters) => {
            return (
              <div key={characters.id}>
                <Card
                  id={characters.id}
                  name={characters.name}
                  status={characters.status}
                  species={characters.species}
                  gender={characters.gender}
                  origin={characters.origin.name}
                  image={characters.image}
                  onClose={onClose}
                />
              </div>
            );
          })}
      </div>
      {characters.length ? <Paginate cantPage={cantPage} /> : null}
    </>
  );
}
