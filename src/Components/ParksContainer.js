import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ParkCard from './ParkCard';
// import parksData from '../data/parks_data.json';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';

function ParksContainer(props) {
    const [parks, setParks] = useState([]);
	const [filterValue, setFilter] = useState('');
    let {state} = useParams()
    // console.log('Parks container:', state);

    useEffect(() => {
			const key = process.env.REACT_APP_NPS_KEY;
			const baseUrl = 'https://developer.nps.gov/api/v1/';
			const url = `${baseUrl}parks?stateCode=${state}&limit=470&api_key=${key}`;

			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setParks(res.data);
					console.log(parks.length);
					// console.log('results', res.data);
				});
		},[state]);

	function showPark(park) {
        if(/[a-zA-Z]/.exec(filterValue)) {
            return park.activities.reduce((prev, curr) => {
                return curr.name.toLowerCase().includes(filterValue.toLowerCase()) ? true : prev;
            }, false);
        }
        else return true;
	}

	return (
		<div className='parks-main'>
			<div className='form-inputs'>
                <SearchForm />
                <FilterForm setFilter={setFilter} filter={filterValue} />
            </div>
			<div className='parks-container'>
				{!!parks.length &&
					parks.map((park) => {
						if(showPark(park)){
                            return <ParkCard key={park.id} park={park} />;
                        } else {
                            return null;
                        }
					})}
			</div>
		</div>
	);
}

export default ParksContainer;
