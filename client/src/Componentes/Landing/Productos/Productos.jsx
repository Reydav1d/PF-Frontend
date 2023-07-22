import React, { useEffect } from "react";
import s from "./Productos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductos } from "../../../Redux/Actions/action";
import Cartas from "../../Productos/Cartas/Cartas";

function ProducLanding() {
  const dispatch = useDispatch();
  const los4Productos = useSelector((state) => state.productos);
  const primerosCuatroElementos = los4Productos.slice(0, 4);
  console.log(primerosCuatroElementos);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  return (
    <div className={s.fondo}>
      <div className={s.caja1}>
        {primerosCuatroElementos?.map((item) => (
          <Cartas item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProducLanding;
