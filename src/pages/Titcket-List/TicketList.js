import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';

import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import TicketTable from '../../components/Table/TicketTable';
import SearchForm from '../../components/Search-form/SearchForm';
import tickets from '../../assets/data/dummy-tickets.json';
import { Link } from 'react-router-dom';

const TicketList = () => {

    const [str, setStr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket]);

    const handleChange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = (sttr) => {
        const displayTickets = tickets.filter((row) => 
            row.subject.toLocaleLowerCase().includes(sttr.toLocaleLowerCase())
            );
            
        setDispTicket(displayTickets);
    };


    return (
        <Container  >
            <Row>
                <Col>
                    <PageBreadcrumb page='Ticket List' />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Link to='/add-ticket'>
                        <Button variant='info' >Add New Ticket</Button>
                    </Link>
                </Col>
                <Col className='text-right'>
                    <SearchForm handleChange={handleChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket} />
                </Col>
            </Row>
        </Container >
    )
}

export default TicketList
