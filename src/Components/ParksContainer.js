import React, { useState } from 'react';
import ParkCard from './ParkCard';
import parksData from '../data/parks_data.json';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';

function ParksContainer(props) {
	// console.log(parksData);
	const { data } = parksData;
	const [parks, setParks] = useState();
	const [filterValue, setFilter] = useState('');

	function showPark(park) {
		const show = park.activities.reduce((prev, curr) => {
			return curr.name.toLowerCase().includes(filterValue.toLowerCase()) ? true : prev;
		}, false);
        return show;
	}

	return (
		<div className='parks-main'>
			<div className='form-inputs'>
                <SearchForm setParks={setParks} />
                <FilterForm setFilter={setFilter} filter={filterValue} />
            </div>
			<div className='parks-container'>
				{parks &&
					parks.map((park) => {
						// console.log(park);
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
