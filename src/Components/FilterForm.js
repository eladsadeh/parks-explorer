import React from 'react';

function FilterForm({ filter, setFilter }) {
	return (
		<form className='filter-form form'>
			<label htmlFor='filter-activities'>Filter By Activity</label>
			<input
				required
				type='text'
				id='filter-activities'
				className='filter-input input'
				value={filter}
				onChange={(ev) => setFilter(ev.target.value)} />
		</form>
	);
}

export default FilterForm;
