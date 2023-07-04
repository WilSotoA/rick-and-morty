import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addChar } from "../../redux/actions";
import axios from "axios";
import './SearchBar.css'
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const dispatch = useDispatch();
   const handleChange = (e) => {
      setId(e.target.value)
   };
   const add = () => {
      if (!id) return alert('Por favor inserte un id');
      onSearch(id)
      setId("")
   }
   const onRandom = () => {
      const charRandom = Math.floor(Math.random() * 825) + 1;
      axios(`http://localhost:3001/rickandmorty/character/${charRandom}`).then(
      ({ data }) => {
        if (data.name) {
          dispatch(addChar(data));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
   }
   return (
      <div className="container-search">
         <input className="search" type='search' value={id} onChange={handleChange}/>
         <button onClick={add}>Buscar</button>
         <button onClick={onRandom}>Agregar Random</button>
      </div>
   );
}
