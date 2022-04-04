import { useSelector } from 'react-redux';

export const useSubjectsAllSelector = collectionId => useSelector(state => state.subjects?.map?.get(collectionId) ?? '');