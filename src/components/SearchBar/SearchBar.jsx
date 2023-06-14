import React, {useState} from "react";
import './SearchBar.css'
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   const handleChange = (e) => {
      setId(e.target.value)
   };
   const add = () => {
      onSearch(id)
      setId("")
   }
   const onRandom = () => {
      const charRandom = Math.floor(Math.random() * 825) + 1;
      setId(charRandom);
      onSearch(charRandom);
      setId("")
   }
   return (
      <div className="container-search">
         <input className="search" type='search' value={id} onChange={handleChange}/>
         <button onClick={add}>Agregar</button>
         <button onClick={onRandom}>Agregar Random</button>
      </div>
   );
}
