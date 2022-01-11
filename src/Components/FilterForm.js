import React from 'react';

function FilterForm({ filter, setFilter }) {
	return (
		<form className='filter-form form' onSubmit={(ev) => ev.preventDefault()}>
			<label htmlFor='filter-activities'>Filter By Activity</label>
			<input
				type='text'
				id='filter-activities'
				className='filter-input input'
				value={filter}
				onChange={(ev) => setFilter(ev.target.value)}
			/>
		</form>
	);
}

export default FilterForm;
