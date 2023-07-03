import { ADD_CHAR, REMOVE_CHAR, SEARCH_CHAR, ADD_FAV, REMOVE_FAV, RESET_CHARACTERS, FILTER, ORDER, PREV, NEXT } from "./types";
import axios from 'axios';

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
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
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
