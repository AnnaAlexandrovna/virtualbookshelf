import { SEARCH_QUERY } from './actionsNames';

const initialState = {
    query: ''
};
export const searchData = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_QUERY:
            state.query = action.payload.query;
            return { ...state };
        default:
            return state;
    }
};