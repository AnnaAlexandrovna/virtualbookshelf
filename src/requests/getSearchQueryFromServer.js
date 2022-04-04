import { searchUrl } from './urls';
export const getSearchQueryFromServer = async (search, api, limit = 10, offset = 1) => {
    const response = await fetch(searchUrl(search, api, limit, offset));
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};