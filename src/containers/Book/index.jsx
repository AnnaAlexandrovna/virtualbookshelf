import './index.scss';
import NavBar from '../../components/NavBar/index.jsx';
import { useParams } from 'react-router-dom';
import H1 from '../../components/H1';
import ImageSection from './ImageSection';
import InformationSection from './InformationSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../../thunks/getBookDetails';
import { selectBookData } from '../../selectors/selectBookData';
import AddCommentSection from './CommentsSection';
import { getBookComments } from '../../thunks/getBooksComments';

const BookPage = () => {
    const { path, bookId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookDetails(bookId, path));
        dispatch(getBookComments(`/${path}/${bookId}`));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const book = useSelector(selectBookData);
    return <div>
        <NavBar />
        {
            book.key &&
            <>
                <div className='book-page-container__title'>
                    <H1 className='book-page-container__row' text={book?.title} />
                </div>
                <div className='book-page-container'>
                    <div className='book-page-container__row'>
                        <div className='book-page-container__col-3'>
                            <ImageSection book={book} />
                        </div>
                        <div className='book-page-container__col-9'>
                            <InformationSection book={book} />
                        </div>
                        <div className='book-page-container__col-3'>
                        </div>
                        <div className='book-page-container__col-9'>
                            <AddCommentSection bookId={`/${path}/${bookId}`} />
                        </div>
                    </div>
                </div>
            </>
        }
    </div>;
};

export default BookPage;
