import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from './userRegistrationAction';


const initialState = {
    name: 'Charles',
    lastName: 'Leclerc',
    email: 'charles@ferrari.com',
    phone: '123789',
    company: 'Ferrari',
    address: 'Barcelona',
    password: 'Cl@123456',
    confirmPass: 'Cl@123456',
};

const passVerification = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpcChr: false,
    confirmPass: false
};


const RegistrationForm = () => {

    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(initialState);    
    const [passwordError, setPasswordError] = useState(passVerification);
    const {isLoading, status, message} = useSelector(state => state.registration)

    useEffect(() => {}, [newUser])

    const handleOnChange = e => {
        const {name, value} = e.target;

        setNewUser({ ...newUser, [name]: value});

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
                confirmPass: newUser.password === value
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {
            name,
            lastName,
            email,
            company,
            phone,
            address,
            password
        } = newUser

        const newRegistration = {
            name,
            lastName,
            email,
            company,
            phone,
            address,
            password
        }
        dispatch(userRegistration(newRegistration));
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info'>User Registration</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    {message && <Alert variant={status === 'success' ? 'success' : 'danger'}>{message}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='name' 
                                value={newUser.name}
                                onChange={handleOnChange} 
                                placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='lastName' 
                                value={newUser.lastName}
                                onChange={handleOnChange} 
                                placeholder="Your Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                name='email' 
                                value={newUser.email}
                                onChange={handleOnChange}
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='phone' 
                                value={newUser.phone}
                                onChange={handleOnChange} 
                                placeholder="Phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text" 
                                name='company' 
                                value={newUser.company}
                                onChange={handleOnChange} 
                                placeholder="Company Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='address' 
                                value={newUser.address}
                                onChange={handleOnChange} 
                                placeholder="Full address" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name='password' 
                                value={newUser.password}
                                onChange={handleOnChange} 
                                placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name='confirmPass' 
                                value={newUser.confirmPass}
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
                        <Row className='text-center mt-2'>
                            <Col>
                            {isLoading && <Spinner variant='info' animation='border' />}
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col>
                    Already have an account {' '}
                    <a href='/'>Login now</a>
                </Col>
            </Row>
        </Container>
    )
}

export default RegistrationForm;
