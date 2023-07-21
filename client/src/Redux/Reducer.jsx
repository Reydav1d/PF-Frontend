import { CLEAR_DETAIL, GET_PRODUCT, GET_DESCRIPTION, GET_PICTURE } from "./Actions/constantes";

const initialState = {
  productos: [],
  product: [],
  description: [],
  picture: [],
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
      case GET_DESCRIPTION:
        return {
          ...state,
          description: payload,
        }
      case GET_PICTURE:
        return {
          ...state,
          picture: payload,
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
