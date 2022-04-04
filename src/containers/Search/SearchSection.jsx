import './SearchSection.scss';
import { useDispatch } from 'react-redux';
import { getSearchData } from '../../thunks/getSearchData';
import { searchQuery } from './actions';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { selectSearchQuery } from '../../selectors/selectSearchQuery';
import { useSelector } from 'react-redux';

const SearchSection = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { translate } = useContext(languageContext);
    const search = useSelector(selectSearchQuery);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {
        setUserInput(search);
    }, [search]);
    const onSearch = () => {
        dispatch(searchQuery(userInput));
        dispatch(getSearchData(userInput));
        history.replace(`/search?search=${userInput}`);
    };
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const onEnterClick = event => {
        if(event.key === 'Enter') {
            setUserInput(userInput);
            dispatch(searchQuery(userInput));
            dispatch(getSearchData(userInput));
            history.replace(`/search?search=${userInput}`);
        }
    };
    return <div className='search-section'>
        <input
            className='search-section__input'
            onChange={handleChange}
            value={userInput}
            onKeyDown={onEnterClick}
        />
        <div
            onClick={onSearch}
            className='search-section__button'
        >
            {translate('navBar.search')}
        </div>
    </div>;
};

export default SearchSection;
