import { actionTypes } from "./actionTypes";

export const setLivres = (livres) => {
    return {
        type: actionTypes.SET_LIVRES,
        payload: livres
    };
}
export const increaseLikes = (livre) => {
    return {
        type: actionTypes.INCREASE_LIKE,
        payload: livre
    }
}