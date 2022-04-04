import { booksComment } from './urls';
import { getAuthHeaders } from './getAuthHeaders';

export const deleteBookCommentFromServer = async commentId => {
    const response = await fetch(booksComment(commentId), {
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    if(!response.ok) {
        throw new Error('');
    }
};