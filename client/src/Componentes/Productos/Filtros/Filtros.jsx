import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import './Filtros.css';
import { getCategories, getSearchAdnFilterProducts, setLoading, cleanState, getAllProductos } from "../../../Redux/Actions/action";





function Filtros() {

  //http://localhost:3001/filter-sorts/selection?category=MLA1694&price_min=100&price_max=50000&sort_by=price&order=des
  const categories = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.loading);
  const searched = useSelector((state) => state.searched);
  const [dataUrl, setDataUrl] = useState({
    category:"",
    price_min:"",
    price_max:"",
    sort_by:"",
    order:""
  });

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
    dispatch(setLoading());
    dispatch(getCategories());
  }, []);

 
  // MANEJADOR CATEGORIES:
  const handlecategories = (event) => {
    let category = event.target.value;
    if(category === 'Todas') category = "";
    setDataUrl({ ...dataUrl, category }); // Actualiza el estado con el nuevo valor de 'category'
  };
 
  

  // MANEJADOR ORDEN PRECIO MAYOR/MENOR
  const handlePriceSorts = (event) =>{
    const sort_by = 'price';
    let order = event.target.value;
    if(order === 'Ninguno') order = "";
    setDataUrl({ ...dataUrl, sort_by, order});
  };

  // MANEJADORES PRECIO MAYOR A Y MENOR A:
  const handleMinPriceChange = (event) => {
    const price_min = event.target.value;
    setDataUrl({ ...dataUrl, price_min});
  };

  const handleMaxPriceChange = (event) => {
    const price_max = event.target.value;
    setDataUrl({ ...dataUrl, price_max});
  };


  console.log(dataUrl)

  // MANEJADOR BOTÓN CLEAN:
  function handlerClean() {
    dispatch(cleanState())
    dispatch(setLoading())
    dispatch(getAllProductos())
    // Establece el estado local en su estado inicial vacío
    setDataUrl({
      category: "",
      price_min: "",
      price_max: "",
      sort_by: "",
      order: ""
    });
  
      // Restablece los valores por defecto de los selects
        document.querySelectorAll('select').forEach(select => {
          select.value = "-1";
        });
  }
  // MANEJADOR BOTÓN APLICAR
  const handleAplicarClick = () => {
    dispatch(getSearchAdnFilterProducts(dataUrl))
  };

  return (
    
    <div>
      {!loading ? (
        <div className="container-filter-sorts">
          <div className="container-categories">
            <label>Filtrar por categorías:</label>
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
      ) : (
        <></>
      )}
    </div>
  );
  
}

export default Filtros;





/* 


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import './Filtros.css';
import { getCategories } from "../../../Redux/Actions/action";

function Filtros() {
  //http://localhost:3001/filter-sorts/selection?category=MLA1694&price_min=100&price_max=50000&sort_by=price&order=des
  const categories = useSelector((state) => state.categories);
  const [dataUrl, setDataUrl] = useState({
    category:"",
    price_min:"",
    price_max:"",
    sort_by:"",
    order:""
  });
  
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const dispatch = useDispatch();
  // MANEJADOR CATEGORIES:
  const handlecategories = (event) => {
    let category = event.target.value;
    if(category === 'Todas') category = "";
    setDataUrl({ ...dataUrl, category }); // Actualiza el estado con el nuevo valor de 'category'
  };
 

  // MANEJADOR ORDEN PRECIO MAYOR/MENOR
  const handlePriceSorts = (event) =>{
    const sort_by = 'price';
    let order = event.target.value;
    if(order === 'Ninguno') order = "";
    setDataUrl({ ...dataUrl, sort_by, order});
  };

  // MANEJADORES PRECIO MAYOR A Y MENOR A:
  const handleMinPriceChange = (event) => {
    const price_min = event.target.value;
    setDataUrl({ ...dataUrl, price_min});
  };

  const handleMaxPriceChange = (event) => {
    const price_max = event.target.value;
    setDataUrl({ ...dataUrl, price_max});
  };


  console.log(dataUrl)

  // MANEJADOR BOTÓN CLEAN:
  function handlerClean() {
    // Establece el estado local en su estado inicial vacío
    setDataUrl({
      category: "",
      price_min: "",
      price_max: "",
      sort_by: "",
      order: ""
    });
  
      // Restablece los valores por defecto de los selects
        document.querySelectorAll('select').forEach(select => {
          select.value = "-1";
        });

  }

  return(
      <div className="container-filter-sorts">


        <div className="container-categories">
              <label>Filtrar por categorias:</label>
              <select  onChange={handlecategories} >
                  <option id='-1' value="Todas">todas</option>
                  {
                      categories.map((e, index) =>  (
                      <option key={index} value={e.id}>{e.name}</option>
                      ))
                  }
              </select>
          </div>



          <div className="container-priceSorts">
            <label>Ordenar precio por:</label>  
            <select onChange={handlePriceSorts} >
            <option id='-1' value="Ninguno">Ninguno</option>
              <option id='2' value="asc">menor</option>
              <option id='3' value="desc">mayor</option>
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


          <button className="clean-button" onClick={handlerClean}>Clean</button>
      </div>
  )
}

export default Filtros;



*/