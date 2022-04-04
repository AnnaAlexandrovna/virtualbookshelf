import { getFavoritesFromLocalStorage } from './getFavoritesFromLocalStorage';

export const addBookToFavoritesLocal = (id, data) => {
    const favorite = getFavoritesFromLocalStorage();
    favorite[id] = data;
    localStorage.setItem('favorites', JSON.stringify(favorite));
};
