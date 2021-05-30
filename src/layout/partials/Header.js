import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { userLogout } from '../../api/userApi';


const Header = () => {

    const history = useHistory();

    const logMeOut = () => {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("crmSite");
        userLogout();
        history.push("/");
    };


    return (
        <Navbar
            collapseOnSelect
            bg='info'
            variant='dark'
            expand='md'
        >
            <Navbar.Brand>
                <strong>LUCCA'S CRM</strong>
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to='/dashboard'>
                        <Nav.Link >Dashboard</Nav.Link>
                    </LinkContainer > 
                    <LinkContainer to='/tickets'>
                        <Nav.Link >Tickets</Nav.Link>
                    </LinkContainer > 
                    <LinkContainer to=''>
                        <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                    </LinkContainer> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
