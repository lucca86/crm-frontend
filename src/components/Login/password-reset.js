import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Col, Container, Form, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { sendPasswordResetOtp } from '../password-reset/passwordAction';



const ResetPassword = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const {isLoading, status, message} = useSelector(state => state.password);


    const handleResetSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        dispatch(sendPasswordResetOtp(email));
    }
    
    const handleChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center' >Reset password</h1>
                    <hr />
                    {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>}
                    {isLoading && <Spinner variant='primary' animation='border' />}
                    <Form autoComplete='off' onSubmit={handleResetSubmit}>
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
                        <Button type='submit' block>
                            RESET
                        </Button>
                    </Form>
                    <hr />

                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='/'>Login now</a>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword;
