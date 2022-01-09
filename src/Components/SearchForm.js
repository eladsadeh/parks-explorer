import React, { useState } from 'react';
import states from '../data/states_names.json';
import activities from '../data/activities.json';

function SearchForm(props) {
	// const formInitialState = { state: 'Any', activity: 'Any' };
	const initialState = 'Any';
	const [searchState, setSearchState] = useState(initialState);
	const key = process.env.REACT_APP_NPS_KEY;
	const baseUrl = 'https://developer.nps.gov/api/v1/';
	let url = '';

	function handleSubmit(ev) {
		ev.preventDefault();
		console.log(ev.target.elements.state.value);
	}

	function handleSearch(ev) {
		console.log('handle search');
		setSearchState(ev.target.value);
		// console.log(ev.target.id, ev.target.value);

		console.log('searching by state', ev.target.value);
		url = `${baseUrl}parks?stateCode=${ev.target.value}&api_key=${key}`;
		console.log(url);

		// setFormState(formInitialState);
		// console.log(formState);
	}

	return (
		<form className='search-form' onSubmit={(ev) => handleSubmit(ev)}>
			
				<label htmlFor='search-states'>Search By State</label>
				<select
					className='single-select'
					id='state'
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
		
			
			{/* <button type='submit'>Search</button> */}
		</form>
	);
}

export default SearchForm;
