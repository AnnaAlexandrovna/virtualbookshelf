import { ADD_BOOK_DETAILS, REMOVE_BOOK_COMMENT, ADD_BOOK_COMMENT, MODIFY_BOOK_COMMENT } from './actionsNames';

export const addBookDetails = (id, data) => { return { type: ADD_BOOK_DETAILS, payload: { id, data } }; };
export const addBookComments = comment => ({ type: ADD_BOOK_COMMENT, payload: { comment } });
export const removeBookComments = commentId => ({ type: REMOVE_BOOK_COMMENT, payload: { commentId } });
export const modifyBookComment = (commentId, comment) => ({ type: MODIFY_BOOK_COMMENT, payload: { commentId, comment } });