import { Link } from "react-router-dom"; 
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartas from "../Cartas/Cartas";
import { getAllProductos } from "../../../Redux/Actions/action";
import s from "./ContenedorCartas.module.css"
import { useParams } from "react-router-dom";
import PaginationButtons from "../../Paginado/PaginationButtons";


function ContenedorCartas() {
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
