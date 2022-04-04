import NavBar from '../../components/NavBar/index.jsx';
import SearchSection from './SearchSection';
import BookList from '../../components/BookList';
import Paginator from '../../components/Paginator';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getSearchData } from '../../thunks/getSearchData';
import { useQuery } from '../../hooks/useQuery';
import { searchQuery } from '../../containers/Search/actions';

const Search = () => {
    const query = useQuery();
    const searchId = query.get('search');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchQuery(searchId));
        dispatch(getSearchData(searchId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchId]);
    return <>
        <NavBar />
        <SearchSection />
        <BookList collectionId='__SEARCH_COLLECTION' />
        <Paginator collectionId='__SEARCH_COLLECTION' />
    </>;
};

export default Search;
