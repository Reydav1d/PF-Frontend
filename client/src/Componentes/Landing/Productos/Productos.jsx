import React, { useEffect } from "react";
import s from "./Productos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductos } from "../../../Redux/Actions/action";

function ProducLanding() {
  const dispatch = useDispatch();
  const los4Productos = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  return (
    <div className={s.fondo}>
      <div className={s.caja1}>{}</div>
    </div>
  );
}

export default ProducLanding;
