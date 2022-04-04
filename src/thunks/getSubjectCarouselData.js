import { errorGetSubjectData } from '../assets/errorText';
import { removeLoader, showLoader } from '../containers/Alert/actions';
import { addRedAlert } from '../containers/Home/actions';
import { addItem, setPage } from '../containers/Subjects/actions';
import { getCarouselData } from '../requests/getCarouselData';

export const getSubjectCarouselData = (collectionId, details = true, limit = 10, offset = 1) =>
    async (dispatch, getState, api) => {
        dispatch(showLoader());
        try {
            dispatch(setPage(collectionId, Math.ceil(offset / limit)));
            const data = await getCarouselData(collectionId, api, details, limit, offset);
            const { works, people, places, subjects, times, work_count, name } = data;
            dispatch(addItem(collectionId, works, getUniqueRelative(people), getUniqueRelative(places), getUniqueRelative(subjects), getUniqueRelative(times), work_count, name));
        } catch(error) {
            dispatch(addRedAlert(errorGetSubjectData));
            console.error(error);
        }
        dispatch(removeLoader());
    };

const getUniqueRelative = data =>{
    const uniqueItems = new Map();
    data.forEach(element => {
        uniqueItems.set(element.key, element);
    });
    return Array.from(uniqueItems.values());
};


