import { SHOW_GREEN_ALERT, DELETE_ALERT, SHOW_RED_ALERT } from './actionsNames';

const initialState = {
    alerts: new Map()
};
export const alertsToShow = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_GREEN_ALERT:
            state.alerts.set(action.payload.message, { message: action.payload.message, color: 'green' });
            return { ...state };
        case SHOW_RED_ALERT:
            state.alerts.set(action.payload.message, { message: action.payload.message, color: 'red' });
            return { ...state };
        case DELETE_ALERT:
            state.alerts.delete(action.payload.message);
            return { ...state };
        default: return state;
    }
};