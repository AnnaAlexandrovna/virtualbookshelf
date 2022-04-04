import { booksComment } from './urls';
import { getAuthHeaders } from './getAuthHeaders';

export const putBookComment = async (commentId, comment) => {
    const response = await fetch(booksComment(commentId), {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ comment })
    });
    if(!response.ok) {
        throw new Error('');
    }
};