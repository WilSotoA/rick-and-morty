import Card from "../Card/Card";
import './Cards.css'

export default function Cards({ characters }) {
  return (
    <div className="cards-container">
      {characters &&
        characters.map((characters) => {
          return (
            <div key={characters.id}>
              <Card
                name={characters.name}
                status={characters.status}
                species={characters.species}
                gender={characters.gender}
                origin={characters.origin.name}
                image={characters.image}
                onClose={() => window.alert("Emulamos que se cierra la card")}
              />
            </div>
          );
        })}
    </div>
  );
}
