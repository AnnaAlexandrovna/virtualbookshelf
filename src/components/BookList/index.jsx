import React from 'react';
import BookCard from '../BookCard';
import { Routers } from '../../constants/routes';
import './index.scss';
import { coverUrl } from '../../requests/urls';
import { useSubjectsSelector } from '../../hooks/useSubjectsSelector';
import { languageContext } from '../../utils/providers/languageProvider';
import { useContext } from 'react';
import H2 from '../H2';

const BookList = React.memo(({ collectionId }) => {
    const books = useSubjectsSelector(collectionId);
    const { translate } = useContext(languageContext);
    return (
        <div className='book-paginator-container'>
            {
                books.length > 0 &&
                books.map(element =>
                    <BookCard
                        chosen={false}
                        key={element.key}
                        title={element.title}
                        author={element?.authors?.map(item => item.name ? item?.name : '')?.join(', ')}
                        image={element.cover_id > 0 ? coverUrl(element.cover_id) : ''}
                        authorLink={`${Routers.collectionWithoutId}${element?.authors[0]?.name}`}
                        bookId={element.key}
                        bookData={element}
                    />)
            } 
            {
                books.length===0  && 
                <H2 text={translate('search.noBooksFind')}/>
            }
        </div>
    );
});

export default BookList;
