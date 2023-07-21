import React from "react";
import s from "./Cartas.module.css";

function Cartas({ item }) {
  return (
    <div className={s.fondo}>
      <div className={s.imagen}>
        <img src={item.image} alt="" style={{ width: "170px" }} />
      </div>
      <div className={s.title}>{item.title}</div>
      <div className={s.price}>
        <h3>{`$ ${item.price}`}</h3>
      </div>
    </div>
  );
}

export default Cartas;
