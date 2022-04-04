import { ADD_BOOK_DETAILS, REMOVE_BOOK_COMMENT, ADD_BOOK_COMMENT, MODIFY_BOOK_COMMENT } from './actionsNames';

const initialState = {
    book: {},
    comments: new Map()
};
export const bookData = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOOK_DETAILS:
            const { id, path, data } = action.payload;
            state.book = {
                id,
                path,
                data,
                authors: new Map()
            };
            return { ...state };
        case ADD_BOOK_COMMENT:
            state.comments.set(action.payload.comment._id, action.payload.comment);
            return { ...state };
        case REMOVE_BOOK_COMMENT:
            const { commentId } = action.payload;
            state.comments.delete(commentId);
            return { ...state };
        case MODIFY_BOOK_COMMENT:
            const modifyElement = state.comments.get(action.payload.commentId);
            modifyElement.data = action.payload.comment;
            state.comments.set(action.payload.commentId, modifyElement);
            return { ...state };
        default: return state;
    }
};