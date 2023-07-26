import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Filtros.css";
import {
  getCategories,
  getSearchAdnFilterProducts,
  cleanState,
  getAllProductos,
  setLoading,
} from "../../../Redux/Actions/action";

function Filtros() {
  const categories = useSelector((state) => state.categories);
  const [price, setPrice] = useState({ min: "", max: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*   const history = useHistory();

  useEffect(() => {
    // Crea una cadena de consulta con los parámetros del estado local
    const queryParams = new URLSearchParams(dataUrl);
    // Actualiza la URL con los parámetros del estado local
    history.push({ search: queryParams.toString() });
  }, [dataUrl, history]);
 */

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // MANEJADOR CATEGORIES:
  const handlecategories = (event) => {
    const { value } = event.target;
    const categoryVal = value === "Todas" ? "" : value;
    dispatch(getSearchAdnFilterProducts({ category: categoryVal }));
  };

  // MANEJADOR ORDEN PRECIO MAYOR/MENOR
  const handlePriceSorts = (event) => {
    const { value } = event.target;
    const sortOrder = value === "Ninguno" ? "" : value;
    dispatch(
      getSearchAdnFilterProducts({ sort_by: "price", order: sortOrder })
    );
  };

  // MANEJADORES PRECIO MAYOR A Y MENOR A:
  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    setPrice({ ...price, min: value });
    dispatch(getSearchAdnFilterProducts({ price_min: value }));
  };

  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    setPrice({ ...price, max: value });
    dispatch(getSearchAdnFilterProducts({ price_max: value }));
  };

  // MANEJADOR BOTÓN CLEAN:
  function handlerClean() {
    dispatch(cleanState());
    // Restablece los valores por defecto de los selects
    document.querySelectorAll("select").forEach((select) => {
      select.value = "-1";
    });
    //reset valores price
    setPrice({ min: "", max: "" });
    dispatch(setLoading());
    dispatch(getAllProductos());
  }

  // MANEJADOR BOTÓN APLICAR
  const handleAplicarClick = () => {
    dispatch(getSearchAdnFilterProducts({ aplicar: true }));
    setPrice({ min: "", max: "" });
    navigate(`/productos/page/${1}`);
  };

  return (
    <div className="custom-container">
      <div className="custom-grid">
        <div className="custom-column">
          <label className="custom-label">Filtrar por categorias:</label>
          <select className="custom-input" onChange={handlecategories}>
            <option value="Todas">Todas</option>
            {categories.map((e, index) => (
              <option key={index} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className="custom-column">
          <label className="custom-label">Ordenar precio por:</label>
          <select className="custom-input" onChange={handlePriceSorts}>
            <option value="Ninguno">Ninguno</option>
            <option value="asc">Menor</option>
            <option value="desc">Mayor</option>
          </select>
        </div>

        <div className="custom-column">
          <label className="custom-label">Filtrar por precio:</label>
          <input
            type="number"
            placeholder="min"
            value={price.min}
            onChange={handleMinPriceChange}
            className="custom-input custom-input-p"
          />
          <input
            type="number"
            placeholder="max"
            value={price.max}
            onChange={handleMaxPriceChange}
            className="custom-input custom-input-p"
          />
        </div>
      </div>

      <div className="mt-4">
        <button className="custom-button ml-4" onClick={handlerClean}>
          Clean
        </button>
        <button className="custom-button" onClick={handleAplicarClick}>
          Aplicar
        </button>
      </div>
    </div>
  );
}

export default Filtros;
