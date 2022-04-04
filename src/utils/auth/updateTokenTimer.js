import { updateToken } from './updateToken';
import { tokenExpire, logoutRedirectPage } from '../../env';

export const updateTokenTimer = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
        await updateToken(refreshToken);
        setTimeout(updateTokenTimer, tokenExpire);
    } catch(e) {
        window.location.assign(logoutRedirectPage);
    }
};