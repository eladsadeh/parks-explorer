import React from 'react';

function FilterForm({ filter, setFilter }) {
	function handleFilter(event) {
		event.preventDefault();
		setFilter(event.target.value);
	}

	return (
		<form className='filter-form form'>
			<label htmlFor='filter-activities'>Filter By Activity</label>
			<input
				id='filter-activities'
				className='filter-input input'
				value={filter}
				onChange={handleFilter}></input>
		</form>
	);
}

export default FilterForm;
