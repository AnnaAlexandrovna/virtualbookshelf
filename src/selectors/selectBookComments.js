import { createSelector } from 'reselect';

export const selectBookComments = bookId => createSelector(
    [selectAllComments],
    state => Array.from(state).filter(comment => comment.bookId === bookId) ?? []
);

const selectAllComments = state => state.bookData.comments.values();