import { ADD_CHAR, REMOVE_CHAR, ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT } from "./types";

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

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

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
