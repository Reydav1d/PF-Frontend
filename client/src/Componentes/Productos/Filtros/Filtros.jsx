<<<<<<< HEAD
import React, { useState } from "react";
import s from "./Filtros.module.css";

function Filtros() {
  //http://localhost:3001/filter-sorts/selection?category=MLA1694&price_min=100&price_max=50000&sort_by=price&order=des
  const categories = useSelector((state) => state.categories);
  const [dataUrl, setDataUrl] = useState({
    category: "",
    price_min: "",
    price_max: "",
    sort_by: "",
    order: "",
  });

=======
import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import './Filtros.css';
import { getCategories, getSearchAdnFilterProducts, cleanState, getAllProductos, setLoading  } from "../../../Redux/Actions/action";




function Filtros() {
  const categories = useSelector((state) => state.categories);
  const [price, setPrice] = useState({ min: "", max: "" });

  const navigate = useNavigate();
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
  const dispatch = useDispatch();
  /*   const history = useHistory();

<<<<<<< HEAD
=======

  /*   const history = useHistory();

>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
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
<<<<<<< HEAD
    let category = event.target.value;
    if (category === "Todas") category = "";
    setDataUrl({ ...dataUrl, category }); // Actualiza el estado con el nuevo valor de 'category'
=======
    const { value } = event.target;
    const categoryVal = value === "Todas" ? "" : value;
    dispatch(getSearchAdnFilterProducts({ category: categoryVal }));
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
  };

  // MANEJADOR ORDEN PRECIO MAYOR/MENOR
  const handlePriceSorts = (event) => {
<<<<<<< HEAD
    const sort_by = "price";
    let order = event.target.value;
    if (order === "Ninguno") order = "";
    setDataUrl({ ...dataUrl, sort_by, order });
=======
    const { value } = event.target;
    const sortOrder = value === "Ninguno" ? "" : value;
    dispatch(
      getSearchAdnFilterProducts({ sort_by: "price", order: sortOrder })
    );
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
  };

  // MANEJADORES PRECIO MAYOR A Y MENOR A:
  const handleMinPriceChange = (event) => {
<<<<<<< HEAD
    const price_min = event.target.value;
    setDataUrl({ ...dataUrl, price_min });
  };

  const handleMaxPriceChange = (event) => {
    const price_max = event.target.value;
    setDataUrl({ ...dataUrl, price_max });
  };

  console.log(dataUrl);

  // MANEJADOR BOTÓN CLEAN:
  function handlerClean() {
    // Establece el estado local en su estado inicial vacío
    setDataUrl({
      category: "",
      price_min: "",
      price_max: "",
      sort_by: "",
      order: "",
    });

=======
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
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
    // Restablece los valores por defecto de los selects
    document.querySelectorAll("select").forEach((select) => {
      select.value = "-1";
    });
<<<<<<< HEAD
=======
    //reset valores price
    setPrice({ min: "", max: "" })
    dispatch(setLoading());
    dispatch(getAllProductos());
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
  }

  // MANEJADOR BOTÓN APLICAR
  const handleAplicarClick = () => {
<<<<<<< HEAD
    dispatch(getSearchAdnFilterProducts(dataUrl));
  };

  return (
    <div className="container-filter-sorts">
      <div className="container-categories">
        <label>Filtrar por categorias:</label>
        <select onChange={handlecategories}>
          <option id="-1" value="Todas">
            todas
          </option>
          {categories.map((e, index) => (
            <option key={index} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container-priceSorts">
        <label>Ordenar precio por:</label>
        <select onChange={handlePriceSorts}>
          <option id="-1" value="Ninguno">
            Ninguno
          </option>
          <option id="2" value="asc">
            menor
          </option>
          <option id="3" value="desc">
            mayor
          </option>
        </select>
      </div>

      <label>
        Filtrar por precio:
        <br />
        <input
          type="number"
          placeholder="min"
          value={dataUrl.price_min}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="max"
          value={dataUrl.price_max}
          onChange={handleMaxPriceChange}
        />
      </label>

      <button className="clean-button" onClick={handlerClean}>
        Clean
      </button>

      <button onClick={handleAplicarClick}>Aplicar</button>
    </div>
  );
=======
    dispatch(getSearchAdnFilterProducts({ aplicar: true }));
    setPrice({ min: "", max: "" })
    navigate(`/productos/page/${1}`);

  };

  return (<div className="custom-container">
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
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
}

export default Filtros;





