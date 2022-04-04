import { ADD_SUBJECT_DATA, SET_PAGINATOR_PAGE } from './actionsNames';

export const addItem = (id, data, people, places, subjects, times, workCount, name) =>
({
    type: ADD_SUBJECT_DATA,
    payload: {
        id,
        data,
        people,
        places,
        subjects,
        times,
        workCount,
        name
    }
});
export const setPage = (id, page) =>
({
    type: SET_PAGINATOR_PAGE,
    payload: {
        id,
        page
    }
});