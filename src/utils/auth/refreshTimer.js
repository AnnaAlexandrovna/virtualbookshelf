import { tokenExpire } from '../../env';
import { updateTokenTimer } from './updateTokenTimer';

export const refreshTimer = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if(token && refreshToken) {
        setTimeout(updateTokenTimer, tokenExpire);
    };
};