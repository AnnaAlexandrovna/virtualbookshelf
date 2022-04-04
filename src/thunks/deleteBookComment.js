import { deleteBookCommentFromServer } from '../requests/deleteBookComment';
import { removeBookComments } from '../containers/Book/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorDeleteComments } from '../assets/errorText';

export const deleteBookComment = commentId =>
    async dispatch => {
        try {
            await deleteBookCommentFromServer(commentId);
            dispatch(removeBookComments(commentId));
        } catch(error) {
            console.error(error);
            dispatch(addRedAlert(errorDeleteComments));
        }
    };
