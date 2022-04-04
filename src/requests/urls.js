import { serverUrl } from '../env';
export const subjectsUrl = (collectionId, api, details = true, limit = 10, offset = 1) =>
    `${api}/subjects/${collectionId}.json?details=${details}&limit=${limit}&offset=${offset}`;
export const bookUrl = (bookId, path, api) => `${api}/${path}/${bookId}.json`;
export const bookAuthorUrl = (authorPath, api) => `${api}${authorPath}.json`;
export const searchUrl = (search, api, limit = 10, offset = 1) => `${api}/search.json?q=${search}&limit=${limit}&offset=${offset}`;
export const coverUrl = cover_id => `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
export const gitHubUrl = `${serverUrl}/auth/github`;
export const tokenRefreshUrl = `${serverUrl}/token`;
export const favoritesUrl = `${serverUrl}/users/favorites`;
export const booksComments = bookId => `${serverUrl}/books/${bookId}/comments`;
export const booksComment = commentId => `${serverUrl}/books/comments/${commentId}`;