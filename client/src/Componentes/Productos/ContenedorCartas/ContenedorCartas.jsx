/* import React, { useEffect } from "react";
import s from "./ContenedorCartas.module.css";
import Cartas from "../Cartas/Cartas";
import { useState } from "react";
import Pagination from "../../Paginado/Paginado";
*/

import { Link } from "react-router-dom"; 
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartas from "../Cartas/Cartas";
import { getAllProductos, getFiltros } from "../../../Redux/Actions/action";
import s from "./ContenedorCartas.module.css"
import { useParams } from "react-router-dom";
import PaginationButtons from "../../Paginado/PaginationButtons";


function ContenedorCartas() {
/*   const dispatch = useDispatch();
  const losProductos = useSelector((state) => state.productos);
  const productosFiltrados = useSelector((state) => state.productosFiltrados);
  //ACÁ SE GUARDAN LOS RESULTADOS DE LA BÚSQUEDA DE LA SEARCHBAR
  //SI NO ENCUENTRA NINGÚN RESULTADO, DEVUELVE UN [false, 'No hay resultados para la búsqueda']
  const searchResults = useSelector((state) => state.searchResults); */

  const losProductos = useSelector((state) => state.productos);
  console.log(losProductos)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  

  const { page } = useParams();
  const pageNumber = page ? parseInt(page) : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(losProductos.length / itemsPerPage);

  const visiblePeople = losProductos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);




  return (
   /*  <div className={s.fondo}>
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
    </div> */
    <div>

 {losProductos.length > 0 ? (
        <div className="cards-container">

          {visiblePeople.map((product, index) => {
            return (
              <Link key={product.id} to={`/detail/${product.id}`}>
                <Cartas key={index} item={product} />
              </Link>
            );
          })}
          
        </div>
      ) : (
        <h2>No hay resultados para la búsqueda</h2>
      )}

      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      /> 

    </div>
  );
  
}

export default ContenedorCartas;
