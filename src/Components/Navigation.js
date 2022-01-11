import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<header>
			<h1>pArk-Z: Find Your Advanture</h1>
			<nav className='header-nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
