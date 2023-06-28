import { ADD_CHAR, REMOVE_CHAR, ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT } from "./types";

const initialState = {
    characters: [],
    allCharacters: [],
    myFavorites: [],
    numPage: 1,
    numCards: 4
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CHAR:
            return {
                ...state,
                characters: [payload, ...state.characters],
            };
        case REMOVE_CHAR:
            const newCharacters = state.characters.filter((character) => character.id !== payload);
            return {
                ...state,
                characters: newCharacters,
            };
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const newList = state.myFavorites.filter(favorite => favorite.id !== parseInt(payload));
            return { ...state, myFavorites: newList, allCharacters: newList };
        case FILTER:
            let newListCh = null;
            payload === 'allCharacters'
                ? newListCh = state.allCharacters
                : newListCh = state.allCharacters.filter(character => character.gender === payload);
            return { ...state, myFavorites: newListCh };
        case ORDER:
            let orderCh = null;
            if (payload.toLowerCase() === 'a') { orderCh = state.allCharacters.sort((a, b) => a.id - b.id) };
            if (payload.toLowerCase() === 'd') { orderCh = state.allCharacters.sort((a, b) => b.id - a.id) };
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
