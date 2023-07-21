import React, { useEffect } from "react";
import s from "./ContenedorCartas.module.css";
import Cartas from "../Cartas/Cartas";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductos, getFiltros } from "../../../Redux/Actions/action";
import Pagination from "../../Paginado/Paginado";

function CardsContainer() {
  const dispatch = useDispatch();
  const losProductos = useSelector((state) => state.productos);
  const productosFiltrados = useSelector((state) => state.productosFiltrados);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  useEffect(() => {
    dispatch(getFiltros("price", "asc"));
  }, [dispatch]);
  const [showFiltrados, setShowFiltrados] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // const currentPosts = losProductos.slice(firstPostIndex, lastPostIndex);

  const currentPosts = showFiltrados
    ? productosFiltrados.slice(firstPostIndex, lastPostIndex)
    : losProductos.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={s.fondo}>
      {currentPosts?.map((item) => (
        <Cartas item={item} />
      ))}
      <div className={s.paginado}>
        <Pagination
          totalPost={losProductos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CardsContainer;
