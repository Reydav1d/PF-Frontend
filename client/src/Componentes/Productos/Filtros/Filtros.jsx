import React from "react";
import s from "./Filtros.module.css";
import { useDispatch } from "react-redux";
import { getFiltros } from "../../../Redux/Actions/action";

function Filtros() {
  const dispatch = useDispatch();

  const handleFiltrarPorPrecioAsc = () => {
    dispatch(getFiltros("price", "asc"));
  };

  const handleFiltrarPorPrecioDesc = () => {
    dispatch(getFiltros("price", "desc"));
  };

  return (
    <div className={s.fondo}>
      {" "}
      <button onClick={handleFiltrarPorPrecioAsc}>
        Filtrar por precio ascendente
      </button>
      <button onClick={handleFiltrarPorPrecioDesc}>
        Filtrar por precio descendente
      </button>
    </div>
  );
}

export default Filtros;
