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
  console.log(LosDatos);
  return (
    <div className="absolute ml-1700 h-700 w-1400 flex justify-center bg-red-400">
      <h1 className="bg-green-400">Mis Datos</h1>
      {LosDatos?.user && (
        <div className="bg-blue-400 w-900">
          <div>
            <img src={LosDatos.user.picture} alt="" />
          </div>
          <div>email:{LosDatos.user.email} </div>
          <div>nombre: {LosDatos.user.nombre}</div>
          <div>usuario: {LosDatos.user.usuario}</div>
          <div>
            estado:{" "}
            {LosDatos.user.user_banned === false
              ? "Habilidato"
              : "Deshabilitado"}
          </div>
        </div>
      )}
    </div>
  );
}

export default misDatos;
