import { putBookComment } from '../requests/putBookComment';
import { modifyBookComment } from '../containers/Book/actions';
import { addRedAlert } from '../containers/Home/actions';
import { errorModifyBookComment } from '../assets/errorText';

export const modifyBookComments = (commentId, comment) =>
    async dispatch => {
        try {
            await putBookComment(commentId, comment);
            dispatch(modifyBookComment(commentId, comment));
        } catch(error) {
            dispatch(addRedAlert(errorModifyBookComment));
            console.error(error);
        }
    };
