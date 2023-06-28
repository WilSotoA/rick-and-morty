import React, {useState, useEffect} from "react";
import './About.css';
import PersonalImage from "../../assets/Imagen.png";

export default function About() {
    const [text, setText] = useState('');
    const originalText = `<Mi full name is Wilmer Andres Soto Almeida and I’m 19 years old and
  I'm mainly focused on back-end web development but with equal
  knowledge in front-end, certainly a passionate coder. />`;
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(originalText.substr(0, index));
        index++;
  
        if (index > originalText.length) {
          clearInterval(interval);
        }
      }, 50); // Velocidad de la escritura (ajustable)
  
      return () => {
        clearInterval(interval);
      };
    }, [originalText]);
  return (
    <>
      <h1 className="title">About</h1>
      <div className="about">
        <div className="container-info">
          <p>{text} <span className="cursor" /></p>
        </div>
        <div className="container-image">
          <img className="image-person" src={PersonalImage} alt="Wilmer Soto A." />
        </div>
      </div>
    </>
  );
}
