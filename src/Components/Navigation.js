import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
	return (
		<Navbar collapseOnSelect variant='light' expand='md'>
			<Navbar.Brand as={Link} to='/'>
				pArkZ: Find Your Advanture
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
				<Nav>
					<Nav.Link as={Link} to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='/search'>
						Search
					</Nav.Link>
					<Nav.Link as={Link} to='/about'>
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
