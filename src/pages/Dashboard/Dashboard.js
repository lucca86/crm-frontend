import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TicketTable from '../../components/Login/Table/TicketTable';

import tickets from '../../assets/data/dummy-tickets.json';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Button 
                        variant='info' 
                        style={{ fontSize:'2rem', padding: '10px 30px'}}>
                        Add new ticket
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-2 mb-2'>
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 8</div>
                </Col>
            </Row>
            <Row>
                <Col className='mb-2'>
                    Recently Added Tickets
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='recent-ticket'>
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
