import { getBooksComments } from '../requests/getBookComments';
import { addBookComments } from '../containers/Book/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorGetBookComments } from '../assets/errorText';

export const getBookComments = bookId =>
    async dispatch => {
        try {
            const data = await getBooksComments(bookId);
            if(Array.isArray(data)) {
                data.forEach(comment => {
                    dispatch(addBookComments(comment));
                });
            }
        } catch(error) {
            dispatch(addRedAlert(errorGetBookComments));
            console.error(error);
        }
    };