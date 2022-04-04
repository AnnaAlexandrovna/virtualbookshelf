import './index.scss';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';
import { Routers } from '../../constants/routes';
import React, { useState, useCallback } from 'react';
import useViewport from '../../hooks/useViewPort';
import breakPoints from '../../constants/breakPoints';
import Bookmark from '../BookMark';
import { addBookToFavorites } from '../../thunks/addBookToFavorites';
import { removeBookFromFavorites } from '../../thunks/removeBookFromFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { selectChosenBooksKeys } from '../../selectors/selectChosenBooksKeys';

const BookCard = React.memo(({ bookId, image, title, author, authorLink, bookData }) => {
    const dispatch = useDispatch();
    const chosen = useSelector(selectChosenBooksKeys).includes(bookId);
    const [activeBookMark, setActiveBookMark] = useState(false);
    let showBook = false;
    const width = useViewport();
    if(width <= breakPoints.breakpointForBigPhone) {
        showBook = true;
    };
    const handleMouseOver = useCallback(
        () => {
            setActiveBookMark(true);
        },
        []
    );
    const handleMouseOut = useCallback(
        () => {
            setActiveBookMark(false);
        },
        []
    );
    if(width > breakPoints.breakpointForBigPhone) {
        if(activeBookMark) {
            showBook = true;
        }
        else {
            showBook = false;
        }
    };
    const clickToBookMark = useCallback(
        () => {
            if(chosen) {
                dispatch(removeBookFromFavorites(bookId));
            } else {
                dispatch(addBookToFavorites(bookId, bookData));
            }
        },// eslint-disable-next-line react-hooks/exhaustive-deps
        [chosen]
    );
    return <div className='book-card-container' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} >
        {
            showBook &&
            <div className='book-card-container__bookmark'>
                <Bookmark onClick={clickToBookMark} active={chosen} />
            </div>
        }
        {
            chosen &&
            <div className='book-card-container__bookmark'>
                <Bookmark onClick={clickToBookMark} active={chosen} />
            </div>
        }
        <Link
            to={`${Routers.bookWithoutId}${bookId}`}
            key={bookId}
            className='book-card-container__link'
        >
            <CardImage
                image={image}
                title={title}
            />
        </Link>
        <CardTitle
            title={title}
            author={author}
            titleLink={`${Routers.bookWithoutId}${bookId}`}
            authorLink={authorLink}
        />
    </div >;
});

export default BookCard;