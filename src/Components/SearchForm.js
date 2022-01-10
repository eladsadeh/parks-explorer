import React, { useEffect, useState } from 'react';
import states from '../data/states_names.json';

function SearchForm({ setParks }) {
	const initialState = 'Any';
	const [searchState, setSearchState] = useState(initialState);

	function fetchParks(stateCode) {
		const key = process.env.REACT_APP_NPS_KEY;
		const baseUrl = 'https://developer.nps.gov/api/v1/';
		const url = `${baseUrl}parks?stateCode=${stateCode}&api_key=${key}`;
		// console.log(url);

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setParks(res.data);

				// console.log('results', res.data);
			});
	}

	function handleSearch(ev) {
        ev.preventDefault();
		console.log('handle search');
		setSearchState(ev.target.value);
		// console.log(ev.target.id, ev.target.value);

		console.log('searching by state', ev.target.value);
		fetchParks(ev.target.value);

		// setFormState(formInitialState);
		// console.log(formState);
	}

	return (
		<form className='search-form form'>
			<label htmlFor='search-states'>Search By State</label>
			<select
				className='single-select input'
				id='search-states'
				onChange={handleSearch}
				value={searchState}>
				{states.map((state) => {
					return (
						<option key={state.value} value={state.value}>
							{state.label}
						</option>
					);
				})}
			</select>
		</form>
	);
}

export default SearchForm;
