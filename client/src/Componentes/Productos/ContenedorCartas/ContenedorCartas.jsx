import { Link } from "react-router-dom"; 
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartas from "../Cartas/Cartas";
import { getAllProductos, setLoading } from "../../../Redux/Actions/action";
import s from "./ContenedorCartas.module.css"
import { useParams } from "react-router-dom";
import PaginationButtons from "../../Paginado/PaginationButtons";


function ContenedorCartas() {
  const allProducts = useSelector((state) => state.productos);
  const searchFiltersProd = useSelector((state) => state.searchFilterResults);
  const loading = useSelector((state) => state.loading);
  const searched = useSelector((state) => state.searched);
  
  let losProductos = allProducts;
  if(searched === true && loading === false) losProductos = searchFiltersProd;



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllProductos());
  }, []);

  

  const { page } = useParams();
  const pageNumber = page ? parseInt(page) : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(losProductos.length / itemsPerPage);

  const visiblePeople = losProductos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



  return (
    <div>
      {/* {losProductos.length > 0 && losProductos[1] !== 'not found' ? (
        <div className="cards-container">
          {visiblePeople.map((product, index) => (
            <Link key={product.id} to={`/detail/${product.id}`}>
              <Cartas key={index} item={product} />
            </Link>
          ))}
        </div>
      ) : (
        <h2>
          {losProductos[1] === 'not found'
            ? 'No se encontraron resultados'
            : 'Cargando...'}
        </h2>
      )}
  
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      /> */}
      <div>
    {loading ? (
      <h1>Cargando...</h1>
    ) : (
      <div>
        {searched && losProductos.length === 0 ? (
          <h2>No se encontraron resultados...</h2>
        ) : (
          <div>
            {visiblePeople.map((product, index) => (
              <Link key={product.id} to={`/detail/${product.id}`}>
                <Cartas key={index} item={product} />
              </Link>
            ))}
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



/* 

<div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <button onClick={handleSearch}>Buscar</button>
          {searched && result.length === 0 ? (
            <h2>No se encontraron resultados</h2>
          ) : (
            <div className="cards-container">
              {searched ? (
                result.map((product, index) => (
                  <Cartas key={index} item={product} />
                ))
              ) : (
                productos.map((product, index) => (
                  <Cartas key={index} item={product} />
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>

 */