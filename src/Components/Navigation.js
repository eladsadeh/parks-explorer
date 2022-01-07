import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<header>
			<h1>pArk-Z: Find Your Advanture</h1>
			<nav className='header-nav'>
				<Link to='/'>Home</Link>
				<Link to='/search'>Search</Link>
				<Link to='/about'>About</Link>
			</nav>
		</header>
	);
}

export default Navigation;
