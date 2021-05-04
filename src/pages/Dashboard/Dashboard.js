import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TicketTable from '../../components/Table/TicketTable';
import { Link } from 'react-router-dom';

import tickets from '../../assets/data/dummy-tickets.json';
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='Dashboard' />
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Link to='/add-ticket'>
                        <Button 
                            variant='info' 
                            style={{ fontSize:'2rem', padding: '10px 30px'}}>
                            Add new ticket
                        </Button>
                    </Link>
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
