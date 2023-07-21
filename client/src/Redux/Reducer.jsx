import {
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
  TODOS_FILTROS,
} from "./Actions/constantes";

const initialState = {
  productos: [],
  product: [],
  productosFiltrados: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTOS:
      return {
        ...state,
        productos: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        productDetail: payload,
      };

    case TODOS_FILTROS:
      return {
        ...state,
        productosFiltrados: payload, // Guardar los productos filtrados en el estado productosFiltrados
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
