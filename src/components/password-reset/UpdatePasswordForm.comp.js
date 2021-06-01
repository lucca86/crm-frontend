import React, { useEffect, useState } from 'react';
import {updatePassword} from './passwordAction';
import { Button, Col, Container, Form, Row, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const initialState = {
    pin: '',
    password: "",
    confirmPass: "",
};

const passVerification = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpcChr: false,
    confirmPass: false
};


const UpdatePasswordForm = () => {

    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState(initialState);    
    const [passwordError, setPasswordError] = useState(passVerification);
    const {isLoading, status, message, email} = useSelector(state => state.password)

    useEffect(() => {}, [newPassword])

    const handleOnChange = e => {
        const {name, value} = e.target;

        setNewPassword({ ...newPassword, [name]: value}); 
    
        if(name === 'password') {
            const isLenthy = value.length > 6;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpcChr = /[@,#,$,%,&]/.test(value);

            setPasswordError({...passwordError, isLenthy
                ,hasUpper
                ,hasLower
                ,hasNumber
                ,hasSpcChr})
        }

        if(name === 'confirmPass'){
            
            setPasswordError({
                ...passwordError,
                confirmPass: newPassword.password === value
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {pin, password} = newPassword;
        //console.log(pin, password);

        const newPassObj = {
            pin, 
            newPassword: password,
            email,
        }

        dispatch(updatePassword(newPassObj));
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Update Password</h1>
                </Col>
            </Row>
            <hr />
            <Row className='text-center'>
                <Col>
                    {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>}
                    {isLoading && <Spinner variant='primary' animation='border' />}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control 
                                type="number" 
                                name='pin' 
                                value={newPassword.pin}
                                onChange={handleOnChange} 
                                placeholder="OTP" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name='password' 
                                value={newPassword.password}
                                onChange={handleOnChange} 
                                placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name='confirmPass' 
                                value={newPassword.confirmPass}
                                onChange={handleOnChange} 
                                placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Text>
                            {!passwordError.confirmPass && (<div className='text-danger mb-3'>Password doesn't match!</div>)}
                        </Form.Text>
                        <ul className='mb-4'>
                            <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                            <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case</li>
                            <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li>
                            <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                            <li className={passwordError.hasSpcChr ? "text-success" : "text-danger"}>At least one of the special characters i.e @ # $ % &</li>
                        </ul>
                        <Button 
                            variant="primary" 
                            type="submit" 
                            block 
                            disabled={Object.values(passwordError).includes(false)}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdatePasswordForm;
