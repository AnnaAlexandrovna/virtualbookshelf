import { favoritesUrl } from './urls';
import { getAuthHeaders } from './getAuthHeaders';

export const getFavorites = async () => {
    const response = await fetch(favoritesUrl, {
        method: 'GET',
        headers: getAuthHeaders()
    });
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};