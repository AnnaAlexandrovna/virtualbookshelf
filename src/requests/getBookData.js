import { bookUrl } from './urls';

export const getBookData = async (bookId, path, api) => {
    const response = await fetch(bookUrl(bookId, path, api));
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};