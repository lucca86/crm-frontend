import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

import {userLogin} from '../../api/userApi';
import {loginPending, loginSuccess, loginFail} from './loginSlice';
import {getUserProfile} from '../../pages/Dashboard/userAction';


const LoginForm = ({formSwitcher}) => {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const {isLoading, isAuth, error} = useSelector((state) => state.login);

    useEffect(() => {
        sessionStorage.getItem("accessJWT") && history.push('/dashboard')
    }, [history, isAuth]);

    const [email, setEmail] = useState("checo11@redbull.com");
    const [password, setPassword] = useState("12345678");

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill up all the form")
        }

        //Call api to submit the form
        dispatch(loginPending());

        try {
            const isAuth = await userLogin({email, password});
            if(isAuth.status === 'error'){
                return dispatch(loginFail(isAuth.message))
            }
            dispatch(loginSuccess());
            dispatch(getUserProfile());
            history.push('/dashboard');

        } catch (error) {
            dispatch(loginFail(error.message));
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center' >Login</h1>
                    <hr />
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter email'
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Enter password'
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type='submit' block>
                            LOGIN
                        </Button>
                        {isLoading && <Spinner variant='primary' animation='border' />}
                    </Form>
                    <hr />

                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='/password-reset'>Forget Password?</a>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col>
                Are you new here? {' '}
                    <a href='/registration' >
                        Register now
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    formSwitcher: PropTypes.func.isRequired,
}

export default LoginForm;
