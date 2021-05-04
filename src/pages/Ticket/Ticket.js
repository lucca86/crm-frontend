import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';

import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/Message-History/MessageHistory';
import UpdateTicket from '../../components/Update-Ticket/UpdateTicket';


//const ticket = tickets[0];

const Ticket = () => {

    const {tId} = useParams();
    const [message, setMessage] = useState(''); 
    const [ticket, setTicket] = useState('');

    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if(tickets[i].id === tId){
                setTicket(tickets[i])
                continue;
            }
            
        }
    }, [message, tId])

    const handleChange = (e) => {
        setMessage(e.target.value)
    };

    const handleSubmit = () => {
        alert('Form submited')
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='Ticket' />
                </Col>
            </Row>
            <Row>
                <Col className='font-weight-bold text-secondary'>
                    {tId}
                    <div className='subject'>Subject: {ticket.subject}</div>
                    <div className='date'>Ticket opened: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-info'>Close ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                {ticket.history && <MessageHistory msg={ticket.history} />}
                    
                </Col>
            </Row>
            <hr />
            <Row className='mt-4'>
                <Col>
                    <UpdateTicket 
                        msg={message} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket;
