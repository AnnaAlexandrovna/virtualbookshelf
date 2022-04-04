import './ImageSection.scss';
import Bookmark from '../../components/BookMark';
import bookImg from '../../assets/images/book.png';
import { useDispatch } from 'react-redux';
import { addBookToFavorites } from '../../thunks/addBookToFavorites';
import { removeBookFromFavorites } from '../../thunks/removeBookFromFavorites';
import { useState } from 'react';
import breakPoints from '../../constants/breakPoints';
import useViewport from '../../hooks/useViewPort';
import { coverUrl } from '../../requests/urls';
import { selectChosenBooksKeys } from '../../selectors/selectChosenBooksKeys';
import { useSelector } from 'react-redux';

const ImageSection = ({ book }) => {
    const dispatch = useDispatch();
    const [activeBookMark, setActiveBookMark] = useState(false);
    let showBook = false;
    const width = useViewport();
    if(width <= breakPoints.breakpointForBigPhone) {
        showBook = true;
    };
    const handleMouseOver = () => {
        setActiveBookMark(true);
    };
    const handleMouseOut = () => {
        setActiveBookMark(false);
    };
    if(width > breakPoints.breakpointForBigPhone) {
        if(activeBookMark) {
            showBook = true;
        }
        else {
            showBook = false;
        }
    };
    const chosenArr = useSelector(selectChosenBooksKeys);
    const chosen = chosenArr.includes(book.key);
    const bookDataConvert = {
        title: book?.title ?? '',
        cover_id: book?.covers?.[0] ?? '',
        authors: book?.authors?.map((item, index) => ({ key: index, name: item })) ?? [],
        key: book?.key
    };
    const clickToBookMark = () => {
        if(chosen) {
            dispatch(removeBookFromFavorites(book.key));
        } else {
            dispatch(addBookToFavorites(book.key, bookDataConvert));
        }
    };
    return <div className='book-page-image-section'
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}>
        {
            showBook &&
            <div >
                <Bookmark onClick={clickToBookMark} active={chosen} />
            </div>
        }
        {
            chosen &&
            <div >
                <Bookmark onClick={clickToBookMark} active={chosen} />
            </div>
        }
        <img
            className='book-page-image-section__image'
            src={book?.covers?.[0] > 0 ? coverUrl(book?.covers[0]) : bookImg}
            alt='Cover'
        />
    </div>;
};

export default ImageSection;
