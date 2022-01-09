import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// Use static data to configure components
// import acad_data from '../data/acad.json';
import Activities from './Activities';
import Carousel from './Carousel';
import Accordion from './Accordion';

const Title = styled.h2`
	font-size: 18px;
	color: whitesmoke;
    margin: 0;
`;

const Location = styled.p`
	font-size: 14px;
	color: whitesmoke;
    margin: 0 auto;
`;

const Details = styled.div`
	/* display: flex;
    flex-direction: row; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	/* grid-auto-rows: auto; */
	grid-gap: 3vw;
	margin-top: 20px;
	width: 100%;
`;

const Wrapper = styled.div`
	background-color: rgb(0, 33, 0);
	display: flex;
	flex-direction: column;
	/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 10px; */
	/* margin: 0 auto; */
	width: 100%;
    padding: 30px;
`;

function ParkDetails(props) {
	const { parkCode } = useParams();
	// const { data } = acad_data;
	const [park, setPark] = useState();
	// console.log(parkCode);
	// console.log(park);

	useEffect(() => {
		const key = process.env.REACT_APP_NPS_KEY;
		const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${key}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setPark(res.data[0]);

				console.log('park', park);
			});
	}, [parkCode]);

	if (!park) return null;
	return (
		<Wrapper className='park_details'>
			<Title className='park_details-title'>{park.fullName}</Title>
			<Location>
				{park.addresses[0].city}, {park.addresses[0].stateCode}
			</Location>
			<Details className='park_details-details'>
				<Carousel className='carousel' images={park.images} />
				<Accordion className='accordion' data={park} />
			</Details>
		</Wrapper>
	);
}

export default ParkDetails;
