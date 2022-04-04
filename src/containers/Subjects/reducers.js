import { ADD_SUBJECT_DATA, SET_PAGINATOR_PAGE } from './actionsNames';

const initialStateSubjects = {
    map: new Map(),
    page: new Map()
};
export const subjects = (state = initialStateSubjects, action) => {
    switch(action.type) {
        case ADD_SUBJECT_DATA:
            if(action.payload.subjects) {
                const { id, data, people, places, subjects, times, workCount, name } = action.payload;
                state.map.set(id,
                    {
                        data,
                        people,
                        places,
                        subjects,
                        times,
                        workCount,
                        name
                    }
                );
            }
            else {
                const { data, id, workCount, name } = action.payload;
                const { people, places, subjects, times } = state.map.get(id) ?? {};
                state.map.set(id,
                    {
                        data,
                        people: people ?? [],
                        places: places ?? [],
                        subjects: subjects ?? [],
                        times: times ?? [],
                        workCount,
                        name
                    }
                );
            }
            return { ...state };
        case SET_PAGINATOR_PAGE:
            const { id, page } = action.payload;
            state.page.set(id, page);
            return { ...state };
        default: return state;
    }
};