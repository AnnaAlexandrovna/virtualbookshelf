import { tokenRefreshUrl } from './urls';
import { isTokenValid } from '../utils/auth/isTokenValid';
import { getAuthHeaders } from './getAuthHeaders';

export const getNewTokens = async (refreshToken) => {
    const response = await fetch(tokenRefreshUrl, {
        method: 'POST',
        headers: getAuthHeaders(true)
    });
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    if(!result || !isTokenValid(result.token)) {
        throw new Error('invalid token');
    }
    return result;
};
