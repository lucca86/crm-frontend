import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketTable = ({tickets}) => {
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ?
                     tickets.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <Link to={`/ticket/${row.id}`}>
                                <td>{row.subject}</td>
                            </Link>
                            <td>{row.status}</td>
                            <td>{row.addedAt}</td>
                        </tr>
                     )): (
                         <tr>
                             <td colSpan='4' className='text-center'>No tickets to show</td>
                         </tr>
                     )}
            </tbody>
        </Table>        
    );
};

TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired
}

export default TicketTable
