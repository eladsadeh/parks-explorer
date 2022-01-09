import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// Use static data to configure components
// import acad_data from '../data/acad.json';
import Activities from './Activities';
import Carousel from './Carousel';
import Accordion from './Accordion';

const Title = styled.h2`
	color: black;
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
    console.log(park);
	return <div className='park_details'>
        <Title>{park.fullName}</Title>
        <Carousel images={park.images}/>
        <Accordion data={park} />  
        </div>;
}

export default ParkDetails;
