import React, { useEffect } from "react";
import { datosDelUsuario } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
//import s from "./Favoritos.module.css";

function misDatos() {
  const dispatch = useDispatch();
  const LosDatos = useSelector((state) => state.datosDelUsuario);

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);

  return (
    <div className="absolute ml-1700 h-700 w-1400">
      <h1>Mis Datos</h1>
      {LosDatos.user && (
        <>
          <div>id: {LosDatos.user.id}</div>
          <div>email: {LosDatos.user.email}</div>
          {/* Agrega aquí más campos para mostrar otros datos del usuario */}
        </>
      )}
    </div>
  );
}

export default misDatos;
