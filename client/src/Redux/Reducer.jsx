import {
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
} from "./Actions/constantes";

const initialState = {
  productos: [],
  productDetail: [],
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
        productDetail: payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        productDetail: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
