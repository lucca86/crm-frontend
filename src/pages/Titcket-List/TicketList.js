import React, { useEffect } from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


import { fetchAllTickets } from './ticketsAction';
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import TicketTable from '../../components/Table/TicketTable';
import SearchForm from '../../components/Search-form/SearchForm';
import { Link } from 'react-router-dom';

const TicketList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);


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
                    <SearchForm />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable />
                </Col>
            </Row>
        </Container >
    )
}

export default TicketList
