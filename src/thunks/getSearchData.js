import { addItem, setPage } from '../containers/Subjects/actions';
import { getSearchQueryFromServer } from '../requests/getSearchQueryFromServer';
import { convertDataToPaginator } from '../utils/search/convertDataToPaginator';
import { removeLoader, showLoader } from '../containers/Alert/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorGetSearchData } from '../assets/errorText';

export const getSearchData = (search, limit = 10, offset = 1) =>
    async (dispatch, getState, api) => {
        dispatch(showLoader());
        try {
            dispatch(setPage('__SEARCH_COLLECTION', Math.ceil(offset / limit)));
            const data = await getSearchQueryFromServer(search, api, limit, offset);
            dispatch(addItem('__SEARCH_COLLECTION', convertDataToPaginator(data.docs), [], [], [], [], data.numFound));
        } catch(error) {
            dispatch(addRedAlert(errorGetSearchData));
            console.error(error);
        }
        dispatch(removeLoader());
    };
