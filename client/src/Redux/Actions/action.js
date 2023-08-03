import axios from "axios";

import {
  GET_PRODUCT,
  CLEAR_DETAIL,
  GET_DESCRIPTION,
  GET_ALL_PRODUCTOS,
  GET_PICTURE,
  GET_CATEGORIES,
  GET_CATEGORY,
  ADD_PRODUCT,
  SEARCH_FILTER_PRODUCTS,
  LOAD_DATA,
  CREATE_USER,
  DATA_USUARIO,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REFRESH_CART,
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

//#######  LOGIN USUARIO #######

export const validarUser = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/login", input);
      const result = response.data;
      localStorage.setItem("token", result.token);
      console.log(result.token);
      dispatch({
        type: CREATE_USER,
      });
    } catch (error) {
      alert("Email o Contraseña Incorrecta!");
      console.error("Error al Igresar", error);
    }
  };
};

export const datosDelUsuario = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.post(`/auth/productos`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data;
      console.log(result);
      dispatch({
        type: DATA_USUARIO,
        payload: result,
      });
    } catch (error) {
      console.error("Error al Igresar", error);
    }
  };
};

// export const cerrarSecion = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post("/logout");
//       const result = response.data;
//       console.log(token);
//       dispatch({
//         type: LOGOUT_USER,
//         payload: result,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

//#######  LOGIN USUARIO #######

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
    //console.log(picture);
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
    //  const cleanArr = categories.map(item => ({id: item.id, name:item.name}));
    //console.log(categories, "categorias");
    dispatch({
      type: GET_CATEGORIES,
      //      payload: cleanArr,

      payload: categories,
    });
  };
};

export const getCategoryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/categories/${id}`);
    const category = apiData.data;
    dispatch({
      type: GET_CATEGORY,
      payload: category,
    });
  };
};

export const addProduct = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/products", productData);
      const newProduct = response.data;
      dispatch({
        type: ADD_PRODUCT,
        payload: newProduct,
      });
    } catch (error) {
      console.error("Error al agregar el producto", error);
    }
  };
};

export const getSearchAdnFilterProducts =
  (urlData) => async (dispatch, getState) => {
    try {
      let { search, category, price_min, price_max, sort_by, order, aplicar } =
        urlData;
      typeof search === "string"
        ? (search = search.replace(/\s/g, "%20"))
        : (search = "");

      console.log("TEST FILTERS", search);

      if (aplicar === true) {
        const state = getState();
        let { search, category, price_min, price_max, sort_by, order } =
          state.filters;
        typeof search === "string"
          ? (search = search.replace(/\s/g, "%20"))
          : (search = "");
        console.log(state.filters);

        const getProducts = await axios.get(
          `/filter-sorts/selection?search=${search}&category=${
            category || ""
          }&price_min=${price_min || ""}&price_max=${price_max || ""}&sort_by=${
            sort_by || ""
          }&order=${order || ""}`
        );

        dispatch({
          type: SEARCH_FILTER_PRODUCTS,
          payload: getProducts.data,
        });
        aplicar = false;
      } else {
        dispatch({
          type: LOAD_DATA,
          payload: urlData,
        });
      }
    } catch (error) {
      console.log("Error al filtrar los productos: " + error);

      dispatch({
        type: SEARCH_FILTER_PRODUCTS,
        payload: [],
      });
    }
  };

export const setLoading = () => ({
  type: "SET_LOADING",
});

export const cleanState = () => ({
  type: "CLEAN_STATE",
});

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const refreshCart = (cart) => {
  return {
    type: REFRESH_CART,
    payload: cart,
  };
};
