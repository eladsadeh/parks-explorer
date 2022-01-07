import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ParkDetails(props) {
	const { parkCode } = useParams();
	const [park, setPark] = useState(null);

	useEffect(() => {
		const key = process.env.REACT_APP_NPS_KEY;
		const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${key}`;
		console.log(url);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setPark(res.data[0]);

				console.log(res.data[0]);
			});
	}, [parkCode]);

	if (!park) return null;
	return <div>{park.parkCode} Park Details Here!</div>;
}

export default ParkDetails;
