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
    <div class="space-y-2">
      <div class="mt-4 mr-4 h-100 w-80 overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <div class="mt-4 mr-4 ml-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300">
          <label class="text-sm font-medium">Filtrar por categorias:</label>
          <select
            class="transition group-open:-rotate-180"
            onChange={handlecategories}
          >
            <option value="Todas">Todas</option>
            {categories.map((e, index) => (
              <option key={index} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div class="mt-4 mr-4 ml-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300">
          <label class="text-sm font-medium">Ordenar precio por:</label>
          <select
            class="transition group-open:-rotate-180"
            onChange={handlePriceSorts}
          >
            <option value="Ninguno">Ninguno</option>
            <option value="asc">Menor</option>
            <option value="desc">Mayor</option>
          </select>
        </div>

        <div class="mt-4 mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300">
          <label class="text-sm font-medium">Filtrar por precio:</label>
          <input
            type="number"
            placeholder="min"
            value={price.min}
            onChange={handleMinPriceChange}
            class="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <input
            type="number"
            placeholder="max"
            value={price.max}
            onChange={handleMaxPriceChange}
            class="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </div>
      </div>

      <div class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          class="inline-block border-e p-3 text-gray-700 hover:bg-gray-500 focus:relative bg-teal-400 text-white font-bold"
          onClick={handlerClean}
        >
          Clean
        </button>
        <button
          class="inline-block border-e p-3 text-gray-700 hover:bg-gray-500 focus:relative bg-blue-400 text-white font-bold"
          onClick={handleAplicarClick}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}

export default Filtros;
