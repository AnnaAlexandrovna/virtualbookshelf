export const removeTokens = () => {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
};