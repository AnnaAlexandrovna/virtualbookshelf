import './index.scss';
import { useState, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { useDispatch } from 'react-redux';
import { searchQuery } from '../../containers/Search/actions';
import { useHistory } from 'react-router-dom';
import React from 'react';

const InputSection = React.memo(() => {
    const [userInput, setUserInput] = useState('');
    const { translate } = useContext(languageContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const onClickSearch = () => {
        dispatch(searchQuery(userInput));
        history.push(`/search?search=${userInput}`);
    };
    const onEnterClick = event => {
        if(event.key === 'Enter') {
            onClickSearch();
        }
    };
    return <div className='search-section-nav'>
        <input
            className='search-section-nav__input'
            onChange={handleChange}
            onKeyDown={onEnterClick}
        />
        <div
            className='search-section-nav__button'
            onClick={onClickSearch}
            value={userInput}
        >
            {translate('navBar.search')}
        </div>
    </div>;

});

export default InputSection;
