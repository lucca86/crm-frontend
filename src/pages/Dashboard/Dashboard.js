import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TicketTable from '../../components/Table/TicketTable';
import { Link } from 'react-router-dom';

import { fetchAllTickets } from '../Titcket-List/ticketsAction';
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
    const {tickets} = useSelector(state => state.tickets);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!tickets.length){
            dispatch(fetchAllTickets())
        }
    }, [tickets, dispatch]);

    const pendingTickets = tickets.filter(row => row.status !== 'Closed');
    const totalTickets = tickets.length;
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
                    <div>Total tickets: {totalTickets}</div>
                    <div>Pending tickets: {pendingTickets.length}</div>
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
