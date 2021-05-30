import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import {loginSuccess} from '../Login/loginSlice';
import DefaultLayout from '../../layout/DefaultLayout';
import { fetchNewAccessJWT } from '../../api/userApi';
import {getUserProfile} from '../../pages/Dashboard/userAction';


const PrivateRoute = ({children, ...rest}) => {

    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.login);
    const {user} = useSelector(state => state.user);

    useEffect(() => {
        const updateAccessJWT = async () => {
            const result = await fetchNewAccessJWT()
            result && dispatch(loginSuccess());
        }

        !user._id && dispatch(getUserProfile());
        !sessionStorage.getItem('accessJWT') && localStorage.getItem('crmSite') && updateAccessJWT();
        !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
    }, [dispatch, isAuth, user._id])
    return (
        <Route 
            {...rest}
            render={() => 
                isAuth 
                    ? 
                    <DefaultLayout>
                        {children} 
                    </DefaultLayout>
                    : 
                    <Redirect to='/'/>
            }
        />
    )
}

export default PrivateRoute
