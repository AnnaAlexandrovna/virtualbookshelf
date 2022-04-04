import NavBar from '../../components/NavBar/index.jsx';
import { useParams } from 'react-router-dom';
import CollectionTitle from './CollectionTitle';
import RelatedSection from './RelatedSection';
import React, { useEffect, useContext, useMemo } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import * as subjectConfig from '../../constants/subjectConfiguration.json';
import { useDispatch } from 'react-redux';
import { getSubjectCarouselData } from '../../thunks/getSubjectCarouselData';
import BookList from '../../components/BookList';
import Paginator from '../../components/Paginator';
import { useSubjectsAllSelector } from '../../hooks/useSubjectsAllSelector';

const Collection = () => {
    const collectionId = useParams().collectionId;
    const { translate } = useContext(languageContext);
    const partOfConfig = useMemo(() => subjectConfig.default.subjects.collections.find(item => item.collectionContent.includes(collectionId)), [collectionId]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubjectCarouselData(collectionId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collectionId]);
    const collectionData = useSubjectsAllSelector(collectionId);
    return <>
        <NavBar />
        {collectionData &&
            <>
                <CollectionTitle
                    title={
                        translate(partOfConfig?.collectionContentLanguage[partOfConfig?.collectionContent.indexOf(collectionId)]) ?? collectionData.name}
                    count={collectionData.workCount} />
                <RelatedSection
                    items={collectionData.subjects?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name }))}
                    title={translate('collection.text1')}
                />
                <div>
                    <BookList collectionId={collectionId} />
                    <Paginator collectionId={collectionId} />
                </div>
                <RelatedSection
                    items={collectionData.people?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name }))}
                    title={translate('collection.text2')}
                />
                <RelatedSection
                    items={collectionData.times?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name }))}
                    title={translate('collection.text3')}
                />
                <RelatedSection
                    items={collectionData.places?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name }))}
                    title={translate('collection.text4')}
                />
            </>
        }
    </>;
};
export default Collection;