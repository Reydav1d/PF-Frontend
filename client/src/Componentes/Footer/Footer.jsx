import React from "react";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div className={s.fondo}>
      <dir className={s.footer}>Footer</dir>
      <dir className={s.caja2}>
        <div className={s.siguenos}>
          <h2>Siguenos:</h2>
          <p>face</p>
          <p>inst</p>
          <p>twitt</p>
        </div>
        <div className={s.grupo}>
          ©2023 Proyecto final en soyhenry, Realizado por el equipo 19
        </div>
      </dir>
    </div>
  );
}

export default Footer;
