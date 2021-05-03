import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AddTicketForm from '../Add-ticket-form/AddTicketForm';
import {shortText} from '../../utils/validation';

const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: ''
}

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false
}

const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    
    useEffect(() => {}, [frmData, frmDataError]);

    const handleChange = e => {
        const { name, value } = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        })
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFrmDataError(initialFrmError);
        
        const isSubjectValid = await shortText(frmData.subject);

        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form submir request recaived');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='New Ticket' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        frmDt={frmData}
                        frmDataError={frmDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket
