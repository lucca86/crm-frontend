import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


const SearchForm = ({handleChange, str}) => {
    console.log(str);
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm='3'>Search:{' '}</Form.Label>
                <Col sm='9'>
                    <Form.Control 
                        name='searchStr'
                        onChange={handleChange}
                        value={str}
                        placeholder='Search...'
                    />
                </Col>
            </Form.Group>
        </Form>
    )
};

SearchForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}

export default SearchForm
