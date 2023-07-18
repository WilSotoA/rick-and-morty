import { ADD_CHAR, REMOVE_CHAR, SEARCH_CHAR, ADD_FAV, REMOVE_FAV, RESET_CHARACTERS, FILTER, ORDER, PREV, NEXT } from "./types";
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

export function addChar(char) {
    return {
        type: ADD_CHAR,
        payload: char,
    };
}

export function removeChar(id) {
    return {
        type: REMOVE_CHAR,
        payload: id,
    };
}

export function searchChar(char) {
    return {
        type: SEARCH_CHAR,
        payload: char,
    };
}

export function resetCharacters() {
    return {
        type: RESET_CHARACTERS,
    };
}

export const addFav = (character) => {
    const endpoint = `${REACT_APP_SERVER_URL}rickandmorty/fav`;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `${REACT_APP_SERVER_URL}rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const prevPage = () => {
    return {
        type: PREV
    }
}

export const nextPage = () => {
    return {
        type: NEXT
    }
}
