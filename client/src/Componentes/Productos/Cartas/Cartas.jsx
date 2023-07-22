import React from "react";
import s from "./Cartas.module.css";

function Cartas({ item }) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })
  return (
    <div className={s.fondo}>
      <div className={s.imagen}>
        <img src={item.image} alt="" style={{ width: "170px" }} />
      </div>
      <div className={s.title}>{item.title}</div>
      <div className={s.price}>
        <h3>{formatter.format(item.price)}</h3>
      </div>
    </div>
  );
}

export default Cartas;
