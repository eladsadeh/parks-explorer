import React from 'react';
import { Link } from 'react-router-dom';

function ParkCard({ park }) {
	// console.log(park.images[0]);
	return (
		<Link to={`/parks/${park.parkCode}`}>
			<div
				className='park_card_container'
				style={{ backgroundImage: `url(${park.images[0].url})` }}>
				<div className='park_card_title'>
					<h3>{park.name}</h3>
					<p>{park.designation}</p>
				</div>
				<p className='park_card_footer'>
					{park.addresses[0].city}, {park.addresses[0].stateCode}
				</p>
			</div>
		</Link>
	);
}

export default ParkCard;
