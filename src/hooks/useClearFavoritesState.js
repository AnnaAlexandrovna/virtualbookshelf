import { useDispatch } from 'react-redux';
import { resetFavorites } from '../containers/Favorites/actions';

export const useClearFavoritesState = () => {
    const dispatch = useDispatch();
    dispatch(resetFavorites());
};