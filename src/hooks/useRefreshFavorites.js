import { useDispatch } from 'react-redux';
import { addBooksToState } from '../thunks/addBooksToState';

export const useRefreshFavorites = () => {
    const dispatch = useDispatch();
    dispatch(addBooksToState());
};