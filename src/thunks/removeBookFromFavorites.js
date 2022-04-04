import { useIsUserAuth } from '../hooks/useIsUserAuth';
import { removeBookFromFavoritesLocal } from '../utils/favorites/removeBookFromFavoritesLocal';
import { removeBookFromFavoritesServer } from '../requests/deleteBookFromFavoritesServer';
import { removeFromFavorites } from '../containers/Favorites/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorRemoveBookFromFavorites } from '../assets/errorText';

export const removeBookFromFavorites = id =>
    async dispatch => {
        try {
            if(useIsUserAuth()) {
                await removeBookFromFavoritesServer(id);
            } else {
                removeBookFromFavoritesLocal(id);
            }
            dispatch(removeFromFavorites(id));
        } catch(e) {
            dispatch(addRedAlert(errorRemoveBookFromFavorites));
            console.error(e);
        }
    };