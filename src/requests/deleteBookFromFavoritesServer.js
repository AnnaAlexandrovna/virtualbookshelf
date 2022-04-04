import { favoritesUrl } from './urls';
import { getAuthHeaders } from './getAuthHeaders';

export const removeBookFromFavoritesServer = async bookId => {
    const response = await fetch(`${favoritesUrl}?` + new URLSearchParams({ bookId }), {
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    if(!response.ok) {
        throw new Error('');
    }
};