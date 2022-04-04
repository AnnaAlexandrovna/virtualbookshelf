import { ADD_BOOK_TO_FAVORITES, REMOVE_BOOK_FROM_FAVORITES, RESET_FAVORITES } from './actionsNames';
const initialStateFavorites = {
    books: {}
};
export const favorites = (state = initialStateFavorites, action) => {
    switch(action.type) {
        case ADD_BOOK_TO_FAVORITES:
            const books = state.books;
            books[action.payload.key] = action.payload;
            return { ...state, books };
        case REMOVE_BOOK_FROM_FAVORITES:
            const allBooks = state.books;
            delete allBooks[action.payload.id];
            return { ...state, allBooks };
        case RESET_FAVORITES:
            return { books: {} };
        default:
            return state;
    }
};