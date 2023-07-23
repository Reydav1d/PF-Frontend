import React from "react";
import s from "./Home.module.css";
import Filtros from "../../Componentes/Productos/Filtros/Filtros";
import ContenedorCartas from "../../Componentes/Productos/ContenedorCartas/ContenedorCartas";
import SearchBar from "../../Componentes/SearchBar/SearchBar";



function Home() {
  return (
    <div>
        <SearchBar />
      <div className={s.fondo}>
        <Filtros />
        <ContenedorCartas />
      </div>
    </div>
  );
}

export default Home;
