import { useRefreshFavorites } from '../../hooks/useRefreshFavorites';
import { removeTokens } from '../../utils/auth/removeTokens';
import { Redirect } from 'react-router';
import { addGreenAlert } from '../Home/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';

const Logout = () => {
    const { translate } = useContext(languageContext);
    const dispatch = useDispatch();
    removeTokens();
    useRefreshFavorites();
    useEffect(() =>{ dispatch(addGreenAlert(translate('auth.logout')));}
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);
    return <Redirect to='/home' />;
};

export default Logout;