import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterSearchTicket } from '../../pages/Titcket-List/ticketsAction';


const SearchForm = () => {
    const dispatch = useDispatch()
    
    const handleChange = e => {
        const {value} = e.target;

        dispatch(filterSearchTicket(value))
    } 
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm='3'>Search:{' '}</Form.Label>
                <Col sm='9'>
                    <Form.Control 
                        name='searchStr'
                        onChange={handleChange}
                        placeholder='Search...'
                    />
                </Col>
            </Form.Group>
        </Form>
    )
};

export default SearchForm
