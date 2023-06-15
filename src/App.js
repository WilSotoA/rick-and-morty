import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';

function App() {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const char = characters.find((character) => character.id === parseInt(id))
            if (char) return alert('Este personaje ya se encuentra agregado')
            setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      const charactersFilter = characters.filter(((character) => character.id !== parseInt(id)))
      setCharacters(charactersFilter);
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
