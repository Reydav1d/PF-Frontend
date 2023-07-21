import axios from "axios";
import {
  GET_PRODUCT,
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  TODOS_FILTROS,
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
