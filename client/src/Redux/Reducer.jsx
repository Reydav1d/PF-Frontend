import {
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_PICTURE,
  GET_CATEGORIES,
} from "./Actions/constantes";

const initialState = {
  productos: [],
  product: [],
  description: [],
  picture: [],
  categories: []
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
        case GET_CATEGORIES:
          return {
            ...state,
            categories: payload,
          }

    default:
      return { ...state };
  }
};

export default rootReducer;
