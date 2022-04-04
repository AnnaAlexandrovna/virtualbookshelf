import { RESET_FAVORITES, ADD_BOOK_TO_FAVORITES, REMOVE_BOOK_FROM_FAVORITES } from './actionsNames';

export const resetFavorites = () => ({ type: RESET_FAVORITES });
export const addFavoriteBook = data => ({ type: ADD_BOOK_TO_FAVORITES, payload: data });
export const removeFromFavorites = id => ({ type: REMOVE_BOOK_FROM_FAVORITES, payload: { id } });