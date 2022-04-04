import { useSelector } from 'react-redux';

export const usePageSelector = collectionId => useSelector(state => state.subjects?.page?.get(collectionId) ?? 1);