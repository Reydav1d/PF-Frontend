import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_DESCRIPTION = "GET_DESCRIPTION";
export const GET_PICTURE = "GET_PICTURE";
export const GET_ALL_PRODUCTOS = "GET_ALL_PRODUCTOS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY = "GET_CATEGORY";
export const TODOS_FILTROS = "TODOS_FILTROS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const getAllProductos = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`/products`);
    const product = apiData.data;
    //console.log(product);
    dispatch({
      type: GET_ALL_PRODUCTOS,
      payload: product,
    });
  };
};

export const getProduct = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/products/${id}`);
    const product = apiData.data;
    dispatch({
      type: GET_PRODUCT,
      payload: product,
    });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
};

export const getDescription = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/products/description/${id}`);
    const description = apiData.data;
    dispatch({
      type: GET_DESCRIPTION,
      payload: description,
    });
  };
};

export const getPicture = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/products/pictures/${id}`);
    const picture = apiData.data;
    console.log(picture);
    dispatch({
      type: GET_PICTURE,
      payload: picture,
    });
  };
};


export const getCategories = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`/categories`);
    const categories = apiData.data;
    const cleanArr = categories.map(item => ({id: item.id, name:item.name}));
    dispatch({
      type: GET_CATEGORIES,
      payload: cleanArr,
    });
  };
};

export const getCategoryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/categories/${id}`);
    const category = apiData.data;
    console.log(category, "categoria");
    dispatch({
      type: GET_CATEGORY,
      payload: category,
    });
  };
};

export const getFiltros = (price, orden) => {
  return async function (dispatch) {
    try {
      // Rellenar los parámetros según tus necesidades
      const category = "MLA1321622215"; // Categoría de productos que deseas filtrar
      const price_min = 100; // Precio mínimo de los productos
      const price_max = 5000; // Precio máximo de los productos

      // Realizar la solicitud GET a la API con los parámetros configurados
      const apiData = await axios.get(
        `/filter-sorts/selection?category=${category}&price_min=${price_min}&price_max=${price_max}&sort_by=${price}&order=${orden}`
      );

      const product = apiData.data;
      console.log(product);
      dispatch({
        type: TODOS_FILTROS,
        payload: product,
      });
    } catch (error) {
      console.error("Error al obtener los productos filtrados:", error.message);
      // Manejar cualquier error de la solicitud aquí si es necesario
    }
  };
};




export const searchProducts = (words) => {
  return async function (dispatch) {
    try {
      words = words.replace(/\s/g, "%20");
      const search = await axios.get(`/products?name=${words}`);
      const searchResult = search.data;
      console.log(search);

      // Si no hay resultados, disparamos la acción con el mensaje adecuado
      if (searchResult.length === 0) {
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: [false, 'No hay resultados para la búsqueda'],
        });
      } else {
        // Si hay resultados, disparamos la acción normalmente
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: searchResult,
        });
      }
    } catch (error) {
      console.log(error);

      // Si hay un error en la solicitud (por ejemplo, error 404), disparamos la acción con el mensaje de error
      dispatch({
        type: SEARCH_PRODUCTS,
        payload: [false,'No hay resultados para la búsqueda'],
      });
    }
  };
};

export const getSearchAdnFilterProducts = (urlData) => {
 /*  try {
    const getProducts = await axios.get(`/categories/${id}`);
  } catch (error) {
    
  } */
};

////http://localhost:3001/products?name=Hub%20Usb