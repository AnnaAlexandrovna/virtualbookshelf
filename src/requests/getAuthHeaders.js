export const getAuthHeaders = withRefreshToken => {
    const headerRefreshToken = withRefreshToken ? { 'X-Refresh-Token': localStorage.getItem('refreshToken') } : {};
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...headerRefreshToken
    };
};