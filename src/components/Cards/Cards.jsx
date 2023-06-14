import Card from "../Card/Card";
import './Cards.css'

export default function Cards({onClose,characters}) {
  return (
    <div className="cards-container">
      {/* {console.log(characters)} */}
      {characters &&
        characters.map((characters) => {
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
  );
}
