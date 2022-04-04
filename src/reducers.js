import { combineReducers } from 'redux';
import { subjects } from './containers/Subjects/reducers';
import { favorites } from './containers/Favorites/reducers';
import { bookData } from './containers/Book/reducers';
import { searchData } from './containers/Search/reducers';
import { alertsToShow } from './containers/Home/reducers';
import { showLoader } from './containers/Alert/reducer';

export const createReducer = () => {
    const rootReducer = combineReducers({ subjects, bookData, searchData, favorites, alertsToShow, showLoader });
    return rootReducer;
};