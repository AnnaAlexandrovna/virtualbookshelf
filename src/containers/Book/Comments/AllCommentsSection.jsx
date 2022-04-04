import CommentAuthorAction from './CommentAuthorAction';
import CommentAuthorAndDate from './CommentAuthorAndDate';
import CommentContent from './CommentContent';
import CommentTextArea from './CommentTextArea';
import ModifyOrSentButtonsSection from './ModifyOrSentButtonsSection';
import NoCommentsContainer from './NoCommentsContainer';
import { getUserIdFromToken } from '../../../utils/auth/getUserIdFromToken';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectBookComments } from '../../../selectors/selectBookComments';
import { deleteBookComment } from '../../../thunks/deleteBookComment';
import { modifyBookComments } from '../../../thunks/modifyBookComment';
import { useIsUserAuth } from '../../../hooks/useIsUserAuth';

const AllCommentsSection = ({ bookId }) => {
    const authUser = useIsUserAuth();
    const comments = useSelector(selectBookComments(bookId));
    let userId = '';
    if(authUser) {
        userId = getUserIdFromToken(localStorage.getItem('token'));
    }
    const [editedCommentId, setEditedCommentId] = useState('');
    const [modifyCommentInput, setModifyCommentInput] = useState('');
    const editComment = (commentId, comment) => {
        setEditedCommentId(commentId);
        setModifyCommentInput(comment);
    };
    const handleChangeModifyComment = (event) => {
        setModifyCommentInput(event.target.value);
    };
    const deleteComment = commentId => {
        dispatch(deleteBookComment(commentId));
    };
    const dispatch = useDispatch();
    const modifyComment = commentId => {
        dispatch(modifyBookComments(commentId, modifyCommentInput));
        setEditedCommentId('');
    };

    return comments?.length > 0 ?
        comments.reverse().map(element =>

            <div className='add-comments-section__container' key={element._id}>
                <CommentAuthorAndDate text={element.userId} date={element.createdAt} />
                {
                    editedCommentId !== element._id &&
                    <CommentContent text={element.data} />
                }
                {
                    editedCommentId === element._id &&
                    <CommentTextArea value={modifyCommentInput} onChange={handleChangeModifyComment} />
                }
                {
                    authUser && editedCommentId !== element._id && userId === element.userId &&
                    <CommentAuthorAction
                        editCommentOnClick={() => editComment(element._id, element.data)}
                        deleteCommentOnClick={() => deleteComment(element._id)}
                    />
                }
                {
                    authUser && editedCommentId === element._id && userId === element.userId &&
                    <ModifyOrSentButtonsSection onClick={() => modifyComment(element._id)} />
                }
            </div>) : <NoCommentsContainer />;
};

export default AllCommentsSection;
