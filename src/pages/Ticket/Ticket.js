import React, { useEffect} from 'react';
import { Button, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MessageHistory from '../../components/Message-History/MessageHistory';
import {UpdateTicket} from '../../components/Update-Ticket/UpdateTicket';
import { closeTicket, fetchSingleTicket } from '../Titcket-List/ticketsAction';
import {resetResponseMsg} from '../Titcket-List/ticketsSlicer';


//const ticket = tickets[0];

const Ticket = () => {

    const {tId} = useParams();
    const dispatch = useDispatch();
    const {isLoading, error, selectedTicket, replyMsg, replyTicketError} = useSelector(state => state.tickets)


    useEffect(() => {
        dispatch(fetchSingleTicket(tId));
        return () => {
            (replyMsg || replyTicketError) && dispatch(resetResponseMsg())
        }
    }, [tId, dispatch, replyMsg, replyTicketError])


    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='Ticket' />
                </Col>
            </Row>
            <Row>
                <Col>
                    {isLoading && <Spinner variant='primary' animation='border' />}
                    {error && <Alert variant='danger'>{error}</Alert> }
                    {replyTicketError && <Alert variant='danger'>{replyTicketError}</Alert> }
                    {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}

                </Col>
            </Row>
            <Row>
                <Col className='text-wieght-bolder text-secondary'>
                    <div className='subject'>Subject: {selectedTicket.subject}</div>
                    <div className='date'>
                        Ticket opened: {" "}
                        {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
                    <div className='status'>Status: {selectedTicket.status}</div>
                </Col>
                <Col className='text-right'>
                    <Button 
                        variant='outline-info'
                        onClick={() => dispatch(closeTicket(tId))}
                        disabled={selectedTicket.status === 'Closed'}
                    >Close ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                {selectedTicket.conversations && (
						<MessageHistory msg={selectedTicket.conversations} />
					)}
                    
                </Col>
            </Row>
            <hr />
            <Row className='mt-4'>
                <Col>
                    <UpdateTicket _id = {tId} />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket;
