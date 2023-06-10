import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./aboutMe.css";
import "../fonts.css";

const AboutMe = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const getCVFile = () => {
    if (isEnglish) {
      return "../../images/Cv-Carla-en.pdf";
    } else {
      return "../../images/Cv-Carla-es.pdf";
    }
  };
  return (
    <div className="container">
      <div className="about-container"></div>
      <div className="text-img-box">
        <div className="h2-pic-cv">
          <h2 className="h2-abt" data-aos="fade-right">
            {" "}
            <span>{isEnglish ? "ABOUT " : "SOBRE "}</span>
            {isEnglish ? "ME" : "MI"}
          </h2>
          <div
            className="pic-cv"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="70"
            data-aos-offset="0"
          >
            <img
              className="linkedin-pic"
              src="../../images/i2.jpg"
              alt="picture"
            />
            <a
              data-aos="flip-left"
              className="a-neon"
              href=""
              style={{ "--clr": "#ff22bb", "--i": 0 }}
            >
              <a
                href="https://drive.google.com/drive/folders/1hr2HCG6n15j73HEZw2cLu4reYySXah_3?usp=drive_link"
                target="_blank"
              >
                <span>CV</span>
              </a>
            </a>
          </div>
        </div>

        <div className="container2">
          <div className="box2">
            <span></span>
            <div className="content">
              <h2>{isEnglish ? "WHO AM I?" : "QUIÉN SOY?"}</h2>
              <p>
                {isEnglish
                  ? "I am 29 years old and I am from Córdoba, Argentina. I have training in the sales area, I studied a year of Psychology with training in TA (Therapeutic Companion), but I decided to start web developer studies in 2022, thus knowing my passion for Frontend."
                  : "Tengo 29 años y soy de Córdoba, Argentina. Tengo formación en el área de ventas, estudié un año de la carrera de Psicología con formación en TA( Acompañante Terapéutico), pero decidí comenzar con los estudios de desarrolladora web en el 2022,  conociendo así mi pasión por el Frontend."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2>
                {isEnglish ? "WHAT ARE MY GOALS?" : "CUÁLES SON MIS METAS?"}
              </h2>
              <p>
                {isEnglish
                  ? "My goal is to be able to continue learning and improving my design skills. I am currently taking courses to learn more about Angular technology."
                  : "Mi objetivo es poder seguir aprendiendo y mejorando mis habilidades de diseño. Actualmente estoy realizando cursos para aprender más sobre la tecnología Angular."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2 className="gettoknowme">
                {isEnglish
                  ? "GET TO KNOW ME A LITTLE MORE!"
                  : "CONOCEME UN POCO MÁS!"}
              </h2>
              <p>
                {isEnglish
                  ? "In my spare time I like to read books and draw as well as being able to play with my children and be in their learning process. Drawing and painting inspire me for the layout of my projects and their design."
                  : "En mi tiempo libre me gusta leer libros y dibujar como así también poder jugar con mis hijos y estar en su proceso de aprendizaje. El dibujar y pintar me genera inspiración para el maquetado de mis proyectos y su diseño."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
