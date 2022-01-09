import React from 'react';
import ParkCard from './ParkCard';
import parksData from '../data/parks_data.json';
import SearchForm from './SearchForm';

function ParksContainer(props) {
	// console.log(parksData);
	const { data } = parksData;
	// console.log(data);
	return (
		<div className='parks-main'>
            <SearchForm />
            <div className='parks-container'>
                {data.map((park) => {
                    // console.log(park);
                    return <ParkCard key={park.id} park={park} />;
                })}
            </div>
        </div>
	);
}

export default ParksContainer;
