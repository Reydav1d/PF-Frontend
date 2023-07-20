import React from "react";
import Productos from "../../Componentes/Landing/Productos/Productos";
import Baner from "../../Componentes/Landing/Baner/Baner";
import Categorias from "../../Componentes/Landing/Categorias/Categorias";
import Reseñas from "../../Componentes/Landing/Reseñas/Reseñas";
import Info from "../../Componentes/Landing/Info/Info";

function Landing() {
  return (
    <div>
      <Productos />
      <Baner />
      <Categorias />
      <Reseñas />
      <Info />
    </div>
  );
}

export default Landing;
