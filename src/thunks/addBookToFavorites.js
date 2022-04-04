import { useIsUserAuth } from '../hooks/useIsUserAuth';
import { postBookToFavoritesServer } from '../requests/postBookToFavoritesServer';
import { addBookToFavoritesLocal } from '../utils/favorites/addBookToFavoritesLocal';
import { addFavoriteBook } from '../containers/Favorites/actions';
import { addRedAlert } from '../containers/Home/actions';
import { addToFavorites } from '../assets/errorText';

export const addBookToFavorites = (id, data) =>
    async dispatch => {
        try {
            if(useIsUserAuth()) {
                await postBookToFavoritesServer(data);
            } else {
                addBookToFavoritesLocal(id, data);
            }
            dispatch(addFavoriteBook(data));
        } catch(e) {
            dispatch(addRedAlert(addToFavorites));
            console.error(e);
        }
    };