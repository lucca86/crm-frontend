import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const ResetPassword = ({ handleChange, handleResetSubmit, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center' >Reset password</h1>
                    <hr />
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
                    <a href='#!' onClick={() => formSwitcher('login')}>Login now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propsTypes = {
    handleChange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}

export default ResetPassword;
