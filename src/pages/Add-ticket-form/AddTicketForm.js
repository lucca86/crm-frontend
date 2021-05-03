import React from 'react';
import { Button, Form, Jumbotron, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './AddTicketForm.css';

const AddTicketForm = ({handleSubmit, handleChange, frmDt, frmDataError}) => {

    console.log(frmDt);
    return (
        <Jumbotron className='mt-3 add-new-ticket bg-light'>
            <h1 className='text-info text-center' >Add New Ticket</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            name='subject'
                            placeholder='Subject'
                            value={frmDt.subject}
                            required
                            onChange={handleChange}
                        />
                        <Form.Text className='text-danger'>{frmDataError.subject && "Subject is required"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            type='date'
                            name='issueDate'
                            value={frmDt.issueDate}
                            required
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as='textarea'
                        name='detail'
                        rows='5'
                        minLength='25'
                        value={frmDt.detail}
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type='submit' block variant='info'>
                    New Ticket
                </Button>
            </Form>
        </Jumbotron>
    )};


AddTicketForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired
}

export default AddTicketForm
