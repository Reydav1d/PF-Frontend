import React from "react";
import s from "./Nosotros.module.css";
//import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importa los íconos de Linkedin y GitHub

function Nosotros() {
  const avatar = "";

  return (
    <div className={s.fondo}>
      <h1 style={{ fontSize: "25px" }}>Nosotros</h1>
      <div className={s.cartasContainer}>
        {/* Primera carta */}
        <div className={s.carta}>
          <img src="/ruta/imagen1.jpg" alt="Imagen 1" className={s.imagen} />
          <p className={s.nombre}>David Perez Tiburcio</p>
          <p className={s.tipo}>Full Stack</p>
          <div className={s.iconos}></div>
        </div>

        {/* Segunda carta */}
        <div className={s.carta}>
          <img src="/ruta/imagen2.jpg" alt="Imagen 2" className={s.imagen} />
          <p className={s.nombre}>Maximiliano Fonseca</p>
          <p className={s.tipo}>Full Stack</p>
          <div className={s.iconos}></div>
        </div>
        {/* Segunda carta */}
        <div className={s.carta}>
          <img src="/ruta/imagen2.jpg" alt="Imagen 2" className={s.imagen} />
          <p className={s.nombre}>Michelle Diaz Garduño</p>
          <p className={s.tipo}>Full Stack</p>
          <div className={s.iconos}></div>
        </div>
        {/* Segunda carta */}
        <div className={s.carta}>
          <img src="/ruta/imagen2.jpg" alt="Imagen 2" className={s.imagen} />
          <p className={s.nombre}>Gaston David Nieto</p>
          <p className={s.tipo}>Full Stack</p>
          <div className={s.iconos}></div>
        </div>

        {/* Tercera carta */}
        {/* ... Repite la estructura para las cartas restantes */}
      </div>
    </div>
  );
}

export default Nosotros;
