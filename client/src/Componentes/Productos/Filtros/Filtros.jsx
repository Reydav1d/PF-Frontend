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
  
    // Limpia los valores de los elementos del DOM directamente (opcional, si es necesario)
    document.querySelectorAll('select, input[type="number"]').forEach(element => {
      element.value = "todos";
    });
  }

  return(
      <div className="container-filter-sorts">


        <div className="container-categories">
              <label>Filtrar por categorias:</label>
              <select  onChange={handlecategories} >
                  <option key='-1' value="Todas">todas</option>
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
            <option key='-1' value="Ninguno">Ninguno</option>
              <option key='2' value="asc">menor</option>
              <option key='3' value="desc">mayor</option>
            </select>
          </div>




          <label>
      Filtrar por precio:
      <br />
      <input
        type="number"
        placeholder="min"
        /* value={minPrice} */
        onChange={handleMinPriceChange}
      />
      <input
        type="number"
        placeholder="max"
        /* value={maxPrice} */
        onChange={handleMaxPriceChange}
      />
    </label>


          <button className="clean-button" onClick={handlerClean}>Clean</button>
      </div>
  )
}

export default Filtros;
