import axios from "axios";
import { GET_PRODUCT, CLEAR_DETAIL, GET_DESCRIPTION, GET_PICTURE } from "./constantes";


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
    }
}

export const getDescription = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`/products/description/${id}`);
        const description = apiData.data;
        dispatch({
            type: GET_DESCRIPTION,
            payload: description,
        })
    }
}

export const getPicture = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`/products/pictures/${id}`);
        const picture = apiData.data;
        dispatch({
            type: GET_PICTURE,
            payload: picture,
        })
    }
}