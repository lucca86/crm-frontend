import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const UpdateTicket = ({msg, handleChange, handleSubmit }) => {
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Replay</Form.Label>
            <Form.Text>Pleasy replay your message here or update the ticket</Form.Text>
            <Form.Control 
                as='textarea'
                rows='5'
                value={msg}
                onChange={handleChange}
                name='detail'
            />
            <div className='text-right mt-3 mb-3' >
                <Button variant='info' type='submit'>
                    Reply
                </Button>
            </div>
        </Form>
    )
};

UpdateTicket.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}

export default UpdateTicket
