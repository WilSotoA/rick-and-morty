import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, addChar, removeChar } from "./redux/actions";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

export default function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "user@gmail.com";
   const PASSWORD = "password1";
   const dispatch = useDispatch();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("User or password incorrect")
      }
   }
   function logout() {
      setAccess(false);
      navigate("/");
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   const { characters } = useSelector((state) => state)
   const { pathname } = useLocation();
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               const char = characters.find(
                  (character) => character.id === parseInt(id)
               );
               if (char) return alert("Este personaje ya se encuentra agregado");
               dispatch(addChar(data));
            } else {
               window.alert("¡No hay personajes con este ID!");
            }
         }
      );
   }
   function onClose(id) {
      dispatch(removeChar(parseInt(id)));
      dispatch(removeFav(parseInt(id)));
   }
   return (
      <div className="App">
         {pathname === "/" ? null : <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path="/" element={<Form login={login} />}></Route>
            <Route
               path="/home"
               element={<Cards onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites onClose={onClose} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error404 />} />
         </Routes>
      </div>
   );
}