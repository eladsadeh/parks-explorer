import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import states from '../data/states_names.json';

function SearchForm(props) {
	let { state } = useParams();
	let navigate = useNavigate();

	function handleSearch(ev) {
		navigate(`/${ev.target.value}`);
	}

	return (
		<form className='search-form form'>
			<label htmlFor='search-states'>Search By State</label>
			<select
				className='single-select input'
				id='search-states'
				onChange={handleSearch}
				value={state}>
				{states.map((state, idx) => {
					return (
						<option key={idx} value={state.value}>
							{state.label}
						</option>
					);
				})}
			</select>
		</form>
	);
}

export default SearchForm;
