import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import {loginSuccess} from '../Login/loginSlice';
import DefaultLayout from '../../layout/DefaultLayout';
import { fetchNewAccessJWT } from '../../api/userApi';


const PrivateRoute = ({children, ...rest}) => {

    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.login);

    useEffect(() => {
        const updateAccessJWT = async () => {
            const result = await fetchNewAccessJWT()
            result && dispatch(loginSuccess());
        }

        updateAccessJWT();
        sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
    }, [dispatch])
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
