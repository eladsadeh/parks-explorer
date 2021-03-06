import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Carousel from './Carousel';
import Accordion from './Accordion';
import Message from './Message';

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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 3vw;
	margin-top: 20px;
	width: 100%;
`;

const Wrapper = styled.div`
	background-color: rgb(0, 33, 0);
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 30px;
`;

function ParkDetails(props) {
	const { parkCode } = useParams();
	const [park, setPark] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const key = process.env.REACT_APP_NPS_KEY;
		const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${key}`;
		setLoading(true);

		fetch(url)
			.then((res) => {
				if (res.status === 404) {
					setError(`No results found for ${parkCode}. Please try again!`);
					setLoading(false);
				} else if (res.status === 200) {
					setLoading(false);
					return res.json();
				}
			})
			.then((res) => {
				setPark(res.data[0]);
			})
			.catch((err) => {
				setLoading(false);
				setError('Oops, something went wrong! Please try again later.');
			});
	}, [parkCode]);

	if (loading) return <Message content='Loading park information ...' />;
	if (error) return <Message content={error} />;
	if (!park) return <Message content='Could not get park information ...' />;
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
