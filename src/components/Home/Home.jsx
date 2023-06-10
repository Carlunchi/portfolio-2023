import React, { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";
import "./home.css";
import "../fonts.css";

const Home = () => {
  const [rocketActive, setRocketActive] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    setRocketActive(true);
    setTimeout(() => {
      setRocketActive(false);
    }, 7000);
  };

  return (
    <div>
      <section className="stars-section">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </section>
      <section className="home-section">
        <div className="frontend-box">
          <h3 className="hi">{isEnglish ? "HI, I'M" : "HOLA, SOY"}</h3>
          <h1 className="h1-intro"> CARLA FORMENTO </h1>
          <h3 className="secondary-text">
            {isEnglish ? "AND I'M A" : "Y SOY UNA"}
          </h3>
          <h2 className="frontend-text">
            {" "}
            <span className="front-span">
              {isEnglish ? "FRONTEND" : "DESARROLLADORA"}
            </span>{" "}
            <br />{" "}
            <span className="dev-span">
              {isEnglish ? "DEVELOPER" : "FRONTEND"}
            </span>
          </h2>

          <div className="container-welcome">
            <span>{isEnglish ? "W" : "B"}</span>
            <span>{isEnglish ? "E" : "I"}</span>
            <span>{isEnglish ? "L" : "E"}</span>
            <span>{isEnglish ? "C" : "N"}</span>
            <span>{isEnglish ? "O" : "V"}</span>
            <span>{isEnglish ? "M" : "E"}</span>
            <span>{isEnglish ? "E " : "N"}</span>
            <span>{isEnglish ? "T" : "I"}</span>
            <span>{isEnglish ? "O " : "D"}</span>
            <span>{isEnglish ? "M" : "O"}</span>
            <span>{isEnglish ? "Y " : "S "}</span>
            <span>{isEnglish ? "P" : "A "}</span>
            <span>{isEnglish ? "O" : "MI "}</span>
            <span>{isEnglish ? "R" : "P"}</span>
            <span>{isEnglish ? "T" : "O"}</span>
            <span>{isEnglish ? "F" : "R"}</span>
            <span>{isEnglish ? "O" : "T"}</span>
            <span>{isEnglish ? "L" : "A"}</span>
            <span>{isEnglish ? "I" : "F"}</span>
            <span>{isEnglish ? "O" : "O"}</span>
            <span>{isEnglish ? "" : "L"}</span>
            <span>{isEnglish ? "" : "I"}</span>
            <span>{isEnglish ? "" : "O"}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
