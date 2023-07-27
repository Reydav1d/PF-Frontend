import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartas from "../Cartas/Cartas";
import { getAllProductos, setLoading } from "../../../Redux/Actions/action";
// import './ContenedorCartas.css'
import { useParams } from "react-router-dom";
import PaginationButtons from "../../Paginado/PaginationButtons";

function ContenedorCartas() {
  const allProducts = useSelector((state) => state.productos);
  const searchFiltersProd = useSelector((state) => state.searchFilterResults);
  const loading = useSelector((state) => state.loading);
  const searched = useSelector((state) => state.searched);

  let losProductos = allProducts;
  if (searched === true && loading === false) losProductos = searchFiltersProd;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllProductos());
  }, []);

  const { page } = useParams();
  const pageNumber = page ? parseInt(page) : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(losProductos.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  console.log(losProductos);
  const visiblePeople = losProductos
    ? losProductos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : null;

  return (
    <div class="lg:col-span-3">
      <div>
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <div>
            {searched && losProductos.length === 0 ? (
              <h2>No se encontraron resultados...</h2>
            ) : (
              <div>
                <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {visiblePeople.map((product, index) => (
                    <Link key={product.id} to={`/detail/${product.id}`}>
                      <Cartas key={index} item={product} />
                    </Link>
                  ))}
                </ul>
              </div>
            )}
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContenedorCartas;
