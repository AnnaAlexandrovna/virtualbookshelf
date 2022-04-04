import { SEARCH_QUERY } from './actionsNames';

export const searchQuery = query => ({ type: SEARCH_QUERY, payload: { query } });