import { useIsUserAuth } from '../hooks/useIsUserAuth';
import { getFavorites } from '../requests/getFavorites';
import { resetFavorites, addFavoriteBook } from '../containers/Favorites/actions';
import { getFavoritesFromLocalStorage } from '../utils/favorites/getFavoritesFromLocalStorage';
import { addRedAlert } from '../containers/Home/actions';
import { addToFavorites } from '../assets/errorText';

export const addBooksToState = () =>
    async dispatch => {
        try {
            const isAuth = useIsUserAuth();
            dispatch(resetFavorites());
            if(isAuth) {
                const booksFromServer = await getFavorites();
                if(booksFromServer?.length > 0) {
                    booksFromServer.forEach(element => dispatch(addFavoriteBook(element.data)));
                }
            } else {
                const booksFromLocalStorage = getFavoritesFromLocalStorage();
                for(let key in booksFromLocalStorage) {
                    dispatch(addFavoriteBook(booksFromLocalStorage[key]));
                }
            }
        } catch(e) {
            dispatch(addRedAlert(addToFavorites));
            console.error(e);
        }
    };