import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, formSwitcher, email, pass }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center' >Login</h1>
                    <hr />
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
                                value={pass}
                                placeholder='Enter password'
                                required
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type='submit' block>
                            LOGIN
                        </Button>
                    </Form>
                    <hr />

                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='#!' onClick={() => formSwitcher('reset')}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}

export default LoginForm;
