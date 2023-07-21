import axios from "axios";
import { GET_PRODUCT, CLEAR_DETAIL, GET_ALL_PRODUCTOS } from "./constantes";

export const getAllProductos = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`/products`);
    const product = apiData.data;
    console.log(product);
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
