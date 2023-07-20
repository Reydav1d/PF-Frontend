import React from "react";
import s from "./Cartas.module.css";

function Cartas({ item }) {
  return <div className={s.fondo}>{item.nombre}</div>;
}

export default Cartas;
