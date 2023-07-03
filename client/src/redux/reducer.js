import { ADD_CHAR, REMOVE_CHAR, SEARCH_CHAR, ADD_FAV, REMOVE_FAV, RESET_CHARACTERS, FILTER, ORDER, PREV, NEXT } from "./types";

const initialState = {
    characters: [],
    allCharacters: [],
    allFavorites: [],
    myFavorites: [],
    numPage: 1,
    numCards: 4
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CHAR:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    characters: [...payload],
                    allCharacters: [...payload]
                };
            }
            return {
                ...state,
                characters: [payload, ...state.allCharacters],
                allCharacters: [payload, ...state.allCharacters]
            };
        case REMOVE_CHAR:
            const newCharacters = state.allCharacters.filter((character) => character.id !== payload);
            return {
                ...state,
                characters: newCharacters,
                allCharacters: newCharacters
            };
        case SEARCH_CHAR:
            return {
                ...state,
                characters: [payload]
            };
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allFavorites: payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allFavorites: payload

            };
        case RESET_CHARACTERS:
            return {
                ...state,
                characters: [...state.allCharacters]
            };
        case FILTER:
            let newListCh = null;
            payload === 'allCharacters'
                ? newListCh = state.allFavorites
                : newListCh = state.allFavorites.filter(favorite => favorite.gender === payload);
            return { ...state, myFavorites: newListCh };
        case ORDER:
            let orderCh = null;
            if (payload.toLowerCase() === 'a') { orderCh = state.allFavorites.sort((a, b) => a.id - b.id) };
            if (payload.toLowerCase() === 'd') { orderCh = state.allFavorites.sort((a, b) => b.id - a.id) };
            return {
                ...state, myFavorites: orderCh,
            }
        case PREV:
            if (state.numPage === 1) return { ...state, numPage: Math.floor(state.characters.length / state.numCards) + 1 };
            return {
                ...state,
                numPage: state.numPage - 1
            }
        case NEXT:
            if (state.numPage === Math.floor(state.characters.length / state.numCards) + 1) {
                return {
                    ...state,
                    numPage: 1
                }
            }
            return {
                ...state,
                numPage: state.numPage + 1
            }
        default:
            return state
    }
}
