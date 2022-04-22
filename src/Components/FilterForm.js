import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterForm(props) {
	// Get URL search paramenters
	let [searchParams, setSearchParams] = useSearchParams();

	// Initialize filter from search params
	const [activityFilter, setActivityFilter] = useState(
		searchParams.has('activity') ? searchParams.get('activity') : ''
	);

	const handleActivityChange = (ev) => {
		ev.preventDefault();
		const string = ev.target.value.replace(/^(\s)*/, '');
		setActivityFilter(string);
		if (string) {
			searchParams.set('activity', string);
		} else {
			searchParams.delete('activity');
		}
		setSearchParams(Object.fromEntries([...searchParams]));
	};

	return (
		<form className='filter-form form' onSubmit={(ev) => ev.preventDefault()}>
			<label htmlFor='filter-activities'>Filter By Activity</label>
			<input
				type='text'
				id='filter-activities'
				className='filter-input input'
				value={activityFilter}
				// onChange={(ev) => setFilter(ev.target.value)}
				onChange={handleActivityChange}
			/>
		</form>
	);
}

export default FilterForm;
