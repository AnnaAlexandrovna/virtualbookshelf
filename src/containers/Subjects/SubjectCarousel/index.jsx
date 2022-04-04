import SubjectCarouselContainer from './Container';
import { useSubjectsSelector } from '../../../hooks/useSubjectsSelector';
import React from 'react';

const SubjectCarousel = React.memo(({ id }) => {
    const allBooks = useSubjectsSelector(id);
    return <>
        {
            allBooks.length > 0 &&
            <SubjectCarouselContainer allBooks={allBooks} />
        }
    </>;
});
export default SubjectCarousel;

