import React from 'react';
import { Link } from 'react-router-dom';

function ParkCard({ park }) {
	// console.log(park.images[0]);
	return (
		<Link to={`/${park.parkCode}`}>
			<div className='park_card_container'>
				<div
					className='park_card_image'
					style={{ backgroundImage: `url(${park.images[0].url})` }}>
					{/* <img src={park.images[0].url} alt={park.images[0].altText} /> */}
					<div className='park_card_text'>
						<h3>{park.name}</h3>
						<p>{park.designation}</p>
						<p>{park.addresses[0].city}, {park.addresses[0].stateCode}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ParkCard;
