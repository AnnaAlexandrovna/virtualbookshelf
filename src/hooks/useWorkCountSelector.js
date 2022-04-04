import { useSelector } from 'react-redux';

export const useWorkCountSelector = collectionId => useSelector(state => state.subjects?.map?.get(collectionId)?.workCount ?? 0);