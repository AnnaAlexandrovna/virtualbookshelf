import { useQuery } from '../../hooks/useQuery';
import { Redirect } from 'react-router';
import { useRefreshFavorites } from '../../hooks/useRefreshFavorites';
import { addGreenAlert } from '../Home/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';

const Login = () => {
    const query = useQuery();
    const { translate } = useContext(languageContext);
    const token = query.get('token');
    useRefreshFavorites();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addGreenAlert(translate('auth.login')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const refreshToken = query.get('refreshToken');
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return <Redirect to='/subject' />;
};

export default Login;
