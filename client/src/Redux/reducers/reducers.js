import {
<<<<<<< HEAD
    CLEAR_DETAIL,
    GET_ALL_PRODUCTOS,
    GET_PRODUCT,
    GET_DESCRIPTION,
    GET_PICTURE,
    GET_CATEGORIES,
    GET_CATEGORY,
    TODOS_FILTROS,
    SEARCH_PRODUCTS,
    SEARCH_FILTER_PRODUCTS,
  } from "../Actions/action";
  
  const initialState = {
    productos: [],
    product: [],
    description: [],
    picture: [],
    categories: [],
    category: [],
    productosFiltrados: [], //Eliminar!
    searchResults: [], //eliminar si llega a no es necesaria
    searchFilterResults: ['1'],
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_PRODUCTOS:
=======
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_PICTURE,
  GET_CATEGORIES,
  GET_CATEGORY,
  ADD_PRODUCT,
  SEARCH_FILTER_PRODUCTS,
  SET_LOADING,
  CLEAN_STATE,
  LOAD_DATA,

} from "../Actions/constantes";

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
  filters: {
    search: "",
    category: "",
    price_min: "",
    price_max: "",
    sort_by: "",
    order: "",
  },
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
      case SEARCH_FILTER_PRODUCTS:
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
        return {
          ...state,
          searchFilterResults: payload,
          loading: false,
          searched: true,
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true,
          searched: false,
        };
<<<<<<< HEAD
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
        return{
          ...state,
          searchResults: payload,
        };
      case SEARCH_FILTER_PRODUCTS:
        return{
          ...state,
          searchFilterResults: payload,
=======
      case CLEAN_STATE:
        for (const key in state.filters) {
          state.filters[key] = '';
>>>>>>> 8c20746ee72c9f919c06389df0d4999ee4db158e
        }
        
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.productos, payload],
      }
    case LOAD_DATA:
      return{
        ...state,
        filters: {
          ...state.filters,
          ...payload, 
        },
      }
    default:
      return { ...state };
  }
};

export default rootReducer;