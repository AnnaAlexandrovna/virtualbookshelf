import { useSelector } from 'react-redux';

export const useSubjectsSelector = collectionId => useSelector(state => state.subjects?.map?.get(collectionId)?.data ?? []);