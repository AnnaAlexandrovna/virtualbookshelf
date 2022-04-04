import { favoritesUrl } from './urls';
import { getAuthHeaders } from './getAuthHeaders';

export const postBookToFavoritesServer = async(data) => {
    const response = await fetch(favoritesUrl, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('');
    }
};