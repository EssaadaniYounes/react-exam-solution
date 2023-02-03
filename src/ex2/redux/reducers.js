import { actionTypes } from './actionTypes';
import { combineReducers } from "redux";
const initialState = {
    livres: []
}

export const livresReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_LIVRES:
            return { ...state, livres: payload };
        case actionTypes.INCREASE_LIKE:
            state.livres.map(l => {
                if (l.titre == payload.titre) return { ...l, likes: l.likes++ };
                return l;
            })
            return { ...state };
        default:
            return state;
    }
}

const reducers = combineReducers({
    allLivres: livresReducer
})

export default reducers;