import { removeTokens } from './removeTokens';
import { getNewTokens } from '../../requests/getNewTokens';

export const updateToken = async (refreshToken) => {
    try {
        if(refreshToken) {
            const tokens = await getNewTokens(refreshToken);
            localStorage.setItem('refreshToken', tokens.refreshToken);
            localStorage.setItem('token', tokens.token);
        }
    } catch(e) {
        console.error(e);
        removeTokens();
        throw new Error('no token');
    }
};
