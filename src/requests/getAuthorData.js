import { bookAuthorUrl } from './urls';

export const getAuthorData = async (authorPath, api) => {
    const response = await fetch(bookAuthorUrl(authorPath, api));
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    const name = result.name;
    return name;
};