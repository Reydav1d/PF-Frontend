import React, { useEffect, useState } from "react";
import s from "./ContenedorCartas.module.css";
import Cartas from "../Cartas/Cartas";
import { getAllProductos } from "../../../Redux/Actions/action";
import s from "./ContenedorCartas.module.css"
import { useParams } from "react-router-dom";
import PaginationButtons from "../../Paginado/PaginationButtons";


function ContenedorCartas() {
  const allProducts = useSelector((state) => state.productos);
  const searchFiltersProd = useSelector((state) => state.searchFilterResults);
  
  let losProductos = allProducts;
  if(searchFiltersProd) losProductos = searchFiltersProd;



function CardsContainer() {
  const dispatch = useDispatch();
  const losProductos = useSelector((state) => state.productos);
  const losFiltrados = useSelector((state) => state.productosFiltrados);
  //ACÁ SE GUARDAN LOS RESULTADOS DE LA BÚSQUEDA DE LA SEARCHBAR
  //SI NO ENCUENTRA NINGÚN RESULTADO, DEVUELVE UN [false, 'No hay resultados para la búsqueda']
  //const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);
  useEffect(() => {
    dispatch(getFiltros("asc"));
  }, []);
  // useEffect(() => {
  //   dispatch(searchProducts());
  // }, []);

  const [showFiltrados, setShowFiltrados] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // const currentPosts = losProductos.slice(firstPostIndex, lastPostIndex);

  const currentPosts = showFiltrados
    ? losFiltrados.slice(firstPostIndex, lastPostIndex)
    : losProductos.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={s.fondo}>
      {losFiltrados.map((item) => (
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
