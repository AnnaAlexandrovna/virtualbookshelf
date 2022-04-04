import { booksComments } from './urls';
import { getAuthHeaders } from './getAuthHeaders';
import { encode as base64_encode } from 'base-64';

export const postBookComment = async (bookId, comment) => {
    const response = await fetch(booksComments(base64_encode(bookId)), {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ comment })
    });
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};