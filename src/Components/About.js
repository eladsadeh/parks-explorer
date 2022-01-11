import React from 'react';
import SearchForm from './SearchForm';

function About(props) {
	return (
		<div className='about'>
			<div className='about-content'>
				<h2 className='about-title'>About pArk-Z</h2>
				<p>pArk-Z (A to Z parks explorer) was developed as part of Software Engineering Immersive bootcamp at General Assembly. </p>
				<p>To explore the national parks system, select a state to search from the list. The app pull the list of parks from the NPS API. To find more details on specific park, click on its card.</p>
				<p>You can filter the list of parks by activity.</p>
			</div>
			<SearchForm />
		</div>
	);
}

export default About;
