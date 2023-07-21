import React, { useEffect } from "react";
import s from "./ContenedorCartas.module.css";
import Cartas from "../Cartas/Cartas";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductos } from "../../../Redux/Actions/action";
import Pagination from "../../Paginado/Paginado";
import { Link } from "react-router-dom";


function CardsContainer() {
  const dispatch = useDispatch();
  const losProductos = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = losProductos.slice(firstPostIndex, lastPostIndex);


  return (
    <div className={s.fondo}>
      {currentPosts?.map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`}>
          <Cartas item={item} />
        </Link>
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
