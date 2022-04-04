import AddCommentTitle from './AddCommentTitle';
import CommentTextArea from './CommentTextArea';
import ModifyOrSentButtonsSection from './ModifyOrSentButtonsSection';
import NoAuthUserAddCommentsContainer from './NoAuthUserAddCommentsContainer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookComment } from '../../../thunks/setBookComment';
import { useIsUserAuth } from '../../../hooks/useIsUserAuth';

const AddComment = ({ bookId }) => {
    const authUser = useIsUserAuth();
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const sendComment = () => {
        dispatch(setBookComment(bookId, userInput));
        setUserInput('');
    };
    return authUser ?
        <div className='add-comments-section__container'>
            <AddCommentTitle />
            <CommentTextArea value={userInput} onChange={handleChange} />
            <ModifyOrSentButtonsSection onClick={sendComment} />
        </div> : <NoAuthUserAddCommentsContainer />;
};

export default AddComment;
