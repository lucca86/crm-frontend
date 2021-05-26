import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import LoginForm from '../../components/Login/Login';
import ResetPassword from '../../components/Login/password-reset';

import './Entry-page.css';

const EntryPage = () => {

    const [frmLoad, setFrmLoad] = useState("login");

    const handleResetSubmit = (e) => {
        e.preventDefault();

    };

    const formSwitcher = frmType => {
        setFrmLoad(frmType);
    };

    return (
        <div className='entry-page bg-info'>
           <Jumbotron className='form-box'>
               {
                   frmLoad === 'login' && (
                    <LoginForm 
                        formSwitcher={formSwitcher}
                    />
               )}
               {
                   frmLoad === 'reset' && (
                       <ResetPassword 
                       // handleChange={handleChange} 
                        handleResetSubmit={handleResetSubmit}
                        formSwitcher={formSwitcher}
                       // email={email}
                       />
                )}
           </Jumbotron>
        </div>
    )
}

export default EntryPage
