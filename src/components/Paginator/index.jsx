import './index.scss';
import arrow_left from '../../assets/images/arrow_left.png';
import arrow_right from '../../assets/images/arrow_right.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSubjectCarouselData } from '../../thunks/getSubjectCarouselData';
import { getSearchData } from '../../thunks/getSearchData';
import { selectSearchQuery } from '../../selectors/selectSearchQuery';
import { usePageSelector } from '../../hooks/usePageSelector';
import { useWorkCountSelector } from '../../hooks/useWorkCountSelector';
import { useSelector } from 'react-redux';
import React from 'react';

const Paginator = React.memo(({ collectionId }) => {
    const dispatch = useDispatch();
    const count = useWorkCountSelector(collectionId);
    const page = usePageSelector(collectionId);
    const search = useSelector(selectSearchQuery);
    const maxNumOfButtons = 8;
    const numOfCard = 10;
    const lStart = Math.ceil(count / numOfCard);
    const numbersOfPage = [];
    const [startCount, setStartCount] = useState(1);
    const makeNumbersForPaginator = (start) => {
        if((Math.ceil(count / numOfCard) - (start - 1)) > maxNumOfButtons) {
            let tempNum = lStart - maxNumOfButtons / 2 + 1;
            for(let i = 0; i < maxNumOfButtons / 2; i++) {
                numbersOfPage.push(start);
                start++;
            }
            numbersOfPage.push('...');
            for(let i = 0; i < maxNumOfButtons / 2 - 1; i++) {
                numbersOfPage.push(tempNum + 1);
                tempNum++;
            }
        } else {
            let temp = start;
            for(let i = 0; i < (Math.ceil(count / numOfCard) - (start - 1)); i++) {
                numbersOfPage.push(temp);
                temp++;
            }
        }
    };
    const getData = index => {
        if(collectionId !== '__SEARCH_COLLECTION') {
            dispatch(getSubjectCarouselData(collectionId, true, numOfCard, index * numOfCard + 1));
        } else {
            dispatch(getSearchData(search, numOfCard, index * numOfCard + 1));
        }
    };
    makeNumbersForPaginator(startCount);
    const indexOfDot = numbersOfPage.findIndex(item => item === page);
    useEffect(() => {
        return () => {
            setStartCount(1);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, collectionId]);

    const onClickNum = index => {
        getData(numbersOfPage[index] - 1);
        if(numbersOfPage[index] - 1 < lStart - maxNumOfButtons + 1) {
            setStartCount(numbersOfPage[index]);
        } else {
            setStartCount(lStart - maxNumOfButtons + 1);
        }
    };
    const onClickArrowPrev = () => {
        if(numbersOfPage[indexOfDot] > 1) {
            if(numbersOfPage[indexOfDot] - 1 < lStart - maxNumOfButtons + 1) {
                setStartCount(numbersOfPage[indexOfDot] - 1);
            } else {
                setStartCount(lStart - maxNumOfButtons + 1);
            }
            getData(numbersOfPage[indexOfDot] - 2);
        }
    };
    const onClickArrowNext = () => {
        if(numbersOfPage[indexOfDot] < lStart) {
            if(numbersOfPage[indexOfDot] + 1 <= lStart - maxNumOfButtons + 1) {
                setStartCount(numbersOfPage[indexOfDot] + 1);
            } else {
                setStartCount(lStart - maxNumOfButtons + 1);
            }
            getData(numbersOfPage[indexOfDot]);
        }
    };
    return <>
        {
            count > 0 &&
            <div className='book-paginator-flipping-section'>
                <div>
                    <img
                        src={arrow_left}
                        alt='<'
                        className='book-paginator-flipping-section__arrow-image'
                        id='prev'
                        onClick={onClickArrowPrev}
                    />
                </div>
                {
                    numbersOfPage.map((item, index) =>
                        <div key={item}>
                            {
                                item === '...' &&
                                <div
                                    className={'book-paginator-flipping-section__dots'}>
                                    {item}
                                </div>
                            }
                            {
                                item !== '...' &&
                                <div
                                    onClick={
                                        () => onClickNum(index)
                                    }
                                    className={
                                        indexOfDot === index ?
                                            'book-paginator-flipping-section__numbers book-paginator-flipping-section__numbers--active' :
                                            'book-paginator-flipping-section__numbers'
                                    }
                                >
                                    {item}
                                </div>
                            }
                        </div>
                    )
                }
                <div>
                    <img
                        src={arrow_right}
                        alt='>'
                        className='book-paginator-flipping-section__arrow-image'
                        id='next'
                        onClick={onClickArrowNext}
                    />
                </div>
            </div>
        }
    </>;
});

export default Paginator;
