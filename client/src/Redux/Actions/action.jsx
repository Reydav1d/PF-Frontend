import axios from "axios";
import {
  GET_PRODUCT,
  CLEAR_DETAIL,
  GET_DESCRIPTION,
  GET_ALL_PRODUCTOS,
  GET_PICTURE,
  GET_CATEGORIES,
  GET_CATEGORY,
  TODOS_FILTROS,
  SEARCH_PRODUCTS,
} from "./constantes";

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
    // console.log(picture);
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
    //console.log(categories, "categorias");
    dispatch({
      type: GET_CATEGORIES,
      payload: categories,
    });
  };
};

export const getCategoryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/categories/${id}`);
    const category = apiData.data;
    //console.log(category, "categoria");
    dispatch({
      type: GET_CATEGORY,
      payload: category,
    });
  };
};

export const getFiltros = (order) => {
  return async function (dispatch) {
    try {
      console.log(order);
      // Rellenar los parámetros según tus necesidades
      const category = "MLA1694"; // Categoría de productos que deseas filtrar
      const price_min = 100; // Precio mínimo de los productos
      const price_max = 50000; // Precio máximo de los productos

      // Realizar la solicitud GET a la API con los parámetros configurados
      const apiData = await axios.get(
        `/filter-sorts/selection?category=MLA1694&price_min=100&price_max=50000&sort_by=price&order="${order}"
        `
      );

      const product = apiData.data;
      console.log(product);
      dispatch({
        type: TODOS_FILTROS,
        payload: product,
      });
    } catch (error) {
      console.error("Error al obtener los productos filtrados:", error.message);
    }
  };
};

export const searchProducts = (words) => {
  return async function (dispatch) {
    try {
      words = words.replace(/\s/g, "%20");
      const search = await axios.get(`/products?name=${words}`);
      const searchResult = search.data;
      console.log(searchResult);

      // Si no hay resultados, disparamos la acción con el mensaje adecuado
      if (searchResult.length === 0) {
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: [false, "No hay resultados para la búsqueda"],
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
        payload: [false, "No hay resultados para la búsqueda"],
      });
    }
  };
};

////http://localhost:3001/products?name=Hub%20Usb
