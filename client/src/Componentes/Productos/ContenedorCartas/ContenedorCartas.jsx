import React from "react";
import s from "./ContenedorCartas.module.css";
import Cartas from "../Cartas/Cartas";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function CardsContainer() {
  const losProductos = useSelector((state) => state.productos);
  console.log(losProductos);
  return (
    <div className={s.fondo}>
      {losProductos?.map((item) => (
        <Cartas item={item} />
      ))}
    </div>
  );
}

export default CardsContainer;
