import { booksComments } from './urls';
import { getAuthHeaders } from './getAuthHeaders';
import { encode as base64_encode } from 'base-64';

export const getBooksComments = async bookId => {
    const response = await fetch(booksComments(base64_encode(bookId)), {
        method: 'GET',
        headers: getAuthHeaders()
    });
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};