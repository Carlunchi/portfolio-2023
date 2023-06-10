import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./projects.css";
import "../fonts.css";

const Projects = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="projectmain">
      <div className="project-main">
        <div className="myproject" data-aos="zoom-in">
          <span>{isEnglish ? "M" : "M"}</span>
          <span>{isEnglish ? "Y " : "I "}</span>
          <span>{isEnglish ? "P" : "S "}</span>
          <span>{isEnglish ? "R" : "P"}</span>
          <span>{isEnglish ? "O" : "R"}</span>
          <span>{isEnglish ? "J" : "O"}</span>
          <span>{isEnglish ? "E" : "Y"}</span>
          <span>{isEnglish ? "C" : "E"}</span>
          <span>{isEnglish ? "T" : "C"}</span>
          <span>{isEnglish ? "S" : "T"}</span>
          <span>{isEnglish ? "" : "O"}</span>
          <span>{isEnglish ? "" : "S"}</span>
        </div>

        <h2 className="project-text" data-aos="zoom-out-down">
          {isEnglish ? "MY PROJECTS" : "MIS PROYECTOS"}
        </h2>

        <div className="project-container">
          <div
            className="project-card"
            style={{ "--clr": "#66e3ff" }}
            data-aos="zoom-out-right"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/propTech.jpeg"
                alt="awg project"
              />
            </div>
            <div className="project-content">
              <h2>PROPTECH</h2>
              <p>
                {isEnglish
                  ? "Final Project carried out in Henry's Bootcamp, the purpose of which is to streamline operations in the real estate sector. It was carried out together with seven other colleagues, being my job the design of the frontend."
                  : "Proyecto Final realizado en el Bootcamp de Henry , la finalidad del mismo es la agilización en las operaciones del rubro inmobiliario. Se realizo en conjunto con otros siete compañeros, siendo mi trabajo el diseño del frontend."}
              </p>
              <a href="https://proptech.bio/" target="_blank">
                {isEnglish ? "CHECK OUT" : "EXPLORAR"}
              </a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ff0086" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/dogpedia.jpeg"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>DOGPEDIA</h2>
              <p>
                {isEnglish
                  ? "Project dedicated to information on dog breeds, as well as the creation of a new one."
                  : "Proyecto dedicado a la información de razas de perros, como así también a la creación de una nueva."}
              </p>
              <a
                href="https://www.youtube.com/watch?v=8Pc2IJh3GL8&t=5s"
                target="_blank"
              >
                {isEnglish ? "CHECK OUT" : "EXPLORAR"}
              </a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ae00ff" }}
            data-aos="zoom-out-left"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/rickandmorty.jpeg"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>Rick and Morty</h2>
              <p>
                {isEnglish
                  ? "Integrator Project, in which we had to put into practice our learned knowledge, both on the frontend side and on the backend."
                  : "Proyecto Integrador, en el cual debiamos poner en practica nuestros conocimientos aprendidos, tanto en el lado del fronend como en el backend."}
              </p>
              <a
                href="https://www.youtube.com/watch?v=POSaw0MjRu8"
                target="_blank"
              >
                {isEnglish ? "CHECK OUT" : "EXPLORAR"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
