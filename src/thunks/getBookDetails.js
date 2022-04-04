import { addBookDetails } from '../containers/Book/actions';
import { getBookData } from '../requests/getBookData';
import { getAuthorData } from '../requests/getAuthorData';
import { removeLoader, showLoader } from '../containers/Alert/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorGetBookDetails } from '../assets/errorText';

export const getBookDetails = (bookId, path = 'work') =>
    async (dispatch, getState, api) => {
        dispatch(showLoader());
        try {
            const data = await getBookData(bookId, path, api);
            const authors = data.authors ? await Promise.all(data.authors?.map(item => getAuthorData(item.author.key, api))) : [];
            const uniqueAuthors = new Set();
            authors.forEach( element => uniqueAuthors.add(element));
            data.authors = Array.from(uniqueAuthors);
            dispatch(addBookDetails(bookId, data));
        } catch(error) {
            dispatch(addRedAlert(errorGetBookDetails));
            console.error(error);
        }
        dispatch(removeLoader());
    };
