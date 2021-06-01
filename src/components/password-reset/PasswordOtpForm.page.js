import React from 'react';
import { useSelector } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import ResetPassword from '../Login/password-reset';
import UpdatePasswordForm from './UpdatePasswordForm.comp';

import './PasswordOtpForm.style.css';

export const PasswordOtpForm = () => {

    const {showUpdatePassForm} = useSelector(state => state.password)

    return (
        <div className='entry-page bg-info'>
           <Jumbotron className='form-box'>
               {showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword  /> }       
           </Jumbotron>
            <div className='text-center'>
                <a href='/'>Login now</a>
            </div>
        </div>
    )
};
