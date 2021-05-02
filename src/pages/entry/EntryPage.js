import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import LoginForm from '../../components/Login/Login';
import ResetPassword from '../../components/Login/password-reset';

import './Entry-page.css';

const EntryPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill up all the form")
        }

        //TODO: Call api to submit the form
        console.log(email, password);
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();

        if(!email){
            return alert("Please enter the email")
        }

        //TODO: Call api to ResetSubmit the form
        console.log(email);
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
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                        pass={password}
                    />
               )}
               {
                   frmLoad === 'reset' && (
                       <ResetPassword 
                        handleChange={handleChange} 
                        handleResetSubmit={handleResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                       />
                )}
           </Jumbotron>
        </div>
    )
}

export default EntryPage
