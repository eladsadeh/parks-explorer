import React, {useState }from 'react';
import states from '../data/states_names.json'
import activities from '../data/activities.json'

function SearchForm(props) {
    const formInitialState = [{state: 'Any'}];
    const [formState ,setFormState] = useState(formInitialState)

	function handleSubmit(ev) {
		ev.preventDefault();
        console.log(ev.target.elements.state.value);
	}

	function handleChange(ev) {
		console.log('handle change');
		console.log(ev.target.id, ev.target.value);
        setFormState({ ...formState, [ev.target.id]: ev.target.value });
	}

	return (
		<form className='search-form' onSubmit={(ev) => handleSubmit(ev)}>
			<label htmlFor='search-states'>Select State</label>
			<select
				className='single-select'
				id='state'
				onChange={handleChange}
				value={formState.state}>
				{states.map((state) => {
					return (
						<option key={state.value} value={state.value}>
							{state.label}
						</option>
					);
				})}
			</select>
			<label htmlFor='search-activities'>Select Activity</label>
			<select
				className='single-select'
				id='activities'
				onChange={handleChange}
				value={formState.activity}>
				{activities.map((activity, index) => {
					return <option key={index}>{activity}</option>;
				})}
			</select>
			{/* <button type='submit'>Search</button> */}
		</form>
	);
}

export default SearchForm;
