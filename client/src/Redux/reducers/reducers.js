import {
    CLEAR_DETAIL,
    GET_ALL_PRODUCTOS,
    SEARCH_FILTER_PRODUCTS,
    SET_LOADING,
    GET_PRODUCT,
    GET_DESCRIPTION,
    GET_PICTURE,
    GET_CATEGORIES,
    GET_CATEGORY,
    TODOS_FILTROS,
    SEARCH_PRODUCTS,
    CLEAN_STATE,
  } from "../Actions/action";
  
  const initialState = {
    productos: [],
    searchFilterResults: [],
    loading: false,
    searched: false,
    product: [],
    description: [],
    picture: [],
    categories: [],
    category: [],
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_PRODUCTOS:
        return {
          ...state,
          productos: payload,
          loading: false,
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
        };
      case GET_DESCRIPTION:
        return {
          ...state,
          description: payload,
        };
      case GET_PICTURE:
        return {
          ...state,
          picture: payload,
        };
      case GET_CATEGORIES:
        return {
          ...state,
          categories: payload,
        };
      case GET_CATEGORY:
        return {
          ...state,
          category: payload,
        };

      case TODOS_FILTROS:
        return {
          ...state,
          productosFiltrados: payload, // Guardar los productos filtrados en el estado productosFiltrados
        };
      case SEARCH_PRODUCTS:
        return {
          ...state,
          searchResults: payload,
        };
      case SEARCH_FILTER_PRODUCTS:
        return {
          ...state,
          searchFilterResults: payload,
          loading: false,
          searched: true,
        };
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
          searched: false,
        };
      case "CLEAN_STATE":
      return {
        ...state,
        searchFilterResults: []
      };
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  