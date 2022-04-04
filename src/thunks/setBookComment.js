import { postBookComment } from '../requests/postBookComment';
import { addBookComments } from '../containers/Book/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorSettingBookComment } from '../assets/errorText';

export const setBookComment = (bookId, comment) =>
    async dispatch => {
        try {
            const postedData = await postBookComment(bookId, comment);
            dispatch(addBookComments(postedData));
        } catch(error) {
            console.error(error);
            dispatch(addRedAlert(errorSettingBookComment));
        }
    };
