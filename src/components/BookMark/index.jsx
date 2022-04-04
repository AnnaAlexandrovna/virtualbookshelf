import './index.scss';
import React from 'react';

const Bookmark = React.memo(({ onClick, active = true }) =>
    <div className='book-mark-chosen-container' onClick={onClick}>
        <div className={active ? 'book-mark-chosen-container__square--active' : 'book-mark-chosen-container__square--not-active'}></div>
        <div className={active ? 'book-mark-chosen-container__arrow--active' : 'book-mark-chosen-container__arrow--not-active'}></div>
    </div>
);

export default Bookmark;
