import './Card.css'
import { Link } from "react-router-dom";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className='Card'>
      <button className='button-close' onClick={( )=> onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
      <h2 className='Card-name'>{name}</h2>
      </Link>
      <div className='container-text'>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
      </div>
      <img className='image-character' src={image} alt="Character Img" />
    </div>
  );
}
