import React, { useState } from "react";
//import s from "./Favoritos.module.css";

const regexNombre = /^[a-zA-Z\s]+$/;
const regexImg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

function EditarUsuario() {
  //const dispatch = useDispatch();

  const [input, setInput] = useState({
    imagen: "",
    nombre: "",
    usuario: "",
    telefono: "",
    //contraseña: "",
  });
  const [error, setError] = useState({
    imagen: "",
    nombre: "",
    usuario: "",
    telefono: "",
    //contraseña: "",
  });

  const validate = (input) => {
    if (!input.nombre) {
      setError({ ...error, nombre: "debe tener nombre" });
      return;
    } else if (!regexNombre.test(input.nombre)) {
      setError({ ...error, imagen: "debe ser una URL" });
      return;
    } else if (!regexImg.test(input.imagen)) {
      setError({ ...error, imagen: "debe ser una URL" });
      return;
    } else if (!regexImg.test(input.imagen)) {
      setError({ ...error, imagen: "debe ser una URL" });
      return;
    } else {
      setError({
        ...error,
        nombre: null,
      });
    }
  };

  function handleNombre(e) {
    setInput({
      ...input,
      nombre: e.target.value,
    });
    validate({
      ...input,
      nombre: [...input.nombre, e.target.value],
    });
  }

  function handleImagen(e) {
    setInput({
      ...input,
      imagen: e.target.value,
    });
  }

  function handleUsuario(e) {
    setInput({
      ...input,
      usuario: e.target.value,
    });
  }

  function handleTelefono(e) {
    setInput({
      ...input,
      telefono: e.target.value,
    });
  }

  // function handleContraseña(e) {
  //   setInput({
  //     ...input,
  //     contraseña: e.target.value,
  //   });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    //dispatch(createVideojuegos(input));
    console.log("formulario enviado", input);
  }

  return (
    <div className="absolute ml-1700 h-700 w-1400 flex items-center flex flex-col mt-20">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            placeholder="por el momento usa url()"
            onChange={handleImagen}
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="John Doe"
            onChange={handleNombre}
          />
        </div>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="usuario123"
            onChange={handleUsuario}
          />
        </div>
        <div>
          <label htmlFor="telefono">Telefono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="1234567891"
            onChange={handleTelefono}
          />
        </div>
        {/* <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="text"
            id="contraseña"
            name="contraseña"
            placeholder="procura que sea segura"
            onChange={handleContraseña}
          />
        </div> */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EditarUsuario;
