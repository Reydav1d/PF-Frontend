import { CLEAR_DETAIL, GET_PRODUCT } from "./Actions/constantes";

const initialState = {
  productos: [],
  product: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
      case CLEAR_DETAIL:
        return {
          ...state,
          product: payload,
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
