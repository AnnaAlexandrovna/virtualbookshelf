import { removeTokens } from '../utils/auth/removeTokens';
import { isTokenValid } from '../utils/auth/isTokenValid';

export const useIsUserAuth = () => {
    try {
        const token = localStorage.getItem('token');
        isTokenValid(token);
        return true;
    } catch(e) {
        removeTokens();
        return false;
    }
};