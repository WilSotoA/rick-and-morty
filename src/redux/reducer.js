import { addFav, removeFav } from "./actions";
import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
};

export default function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const newList = state.myFavorites.filter(favorite => favorite.id !== parseInt(payload));
            return { ...state, myFavorites: newList };
        default:
            return state
    }
}
