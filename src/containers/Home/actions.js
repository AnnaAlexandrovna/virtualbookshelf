import { SHOW_GREEN_ALERT, DELETE_ALERT, SHOW_RED_ALERT } from './actionsNames';

export const addGreenAlert = message => ({ type: SHOW_GREEN_ALERT, payload: { message } });
export const deleteAlert = message => ({ type: DELETE_ALERT, payload: { message } });
export const addRedAlert = message => ({ type: SHOW_RED_ALERT, payload: { message } });