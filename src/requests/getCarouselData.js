import { subjectsUrl } from './urls';

export const getCarouselData = async (collectionId, api, details = true, limit = 10, offset = 1) => {
    const response = await fetch(subjectsUrl(collectionId, api, details, limit, offset));
    if(!response.ok) {
        throw new Error('');
    }
    const result = await response.json();
    return result;
};