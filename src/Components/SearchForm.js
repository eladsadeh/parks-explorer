import React from 'react';
import Form from 'react-bootstrap/Form';

function SearchForm(props) {
	function handleSubmit(ev) {
		ev.preventDefault();
console.log(ev);
		Array.from(ev.target.elements.states.options).forEach((option) => {
            console.log(option.value, option.selected);
        });
	}

    function handleChange(ev) {
        console.log('handle change');
        console.log(ev.target.value);
    }
	return (
		<Form className='search-form' onSubmit={(ev) => handleSubmit(ev)}>
			<Form.Select name='states' id='search-states' multiple={true} onChange={handleChange}>
				<option value='NH'>New Hampshire</option>
				<option value='VT'>Vermont</option>
				<option value='ME'>Maine</option>
			</Form.Select>
			<button type='submit'>Search</button>
		</Form>
	);
}

export default SearchForm;
