import { SHOW_LOADER, REMOVE_LOADER } from './actionsNames';

const initialState = {
    show: false
};
export const showLoader = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            state.show = true;
            return {...state };
        case REMOVE_LOADER:
            state.show = false;
            return {...state };
        default:
            return state;
    }
};