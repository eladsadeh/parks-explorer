import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import ParkCard from './ParkCard';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import Message from './Message'

function ParksContainer(props) {
	// const [parks, setParks] = useState([]);
	const [filterValue, setFilter] = useState('');
	let { state } = useParams();
	// console.log('Parks container:', state);
	const initialFetchState = { loading: false, result: [], error: '' };
	const [APIstate, dispatch] = useReducer(apiStateReducer, initialFetchState);
	const { loading, result, error } = APIstate;

	function apiStateReducer(state, action) {
		console.log('state:', state, "action:", action);
				// console.log(loading, result, error);

		switch (action.type) {
			case 'loading': {
				return { ...initialFetchState, loading: true };
			}
			case 'success': {
				return { ...state, loading: false, result: action.data.data };
			}
			case 'error': {
				return { ...state, loading: false, error: action.error };
			}
			default: {
				return state;
			}
		}
	}

	useEffect(() => {
		const key = process.env.REACT_APP_NPS_KEY;
		const baseUrl = 'https://developer.nps.gov/api/v1/';
		const url = `${baseUrl}parks?stateCode=${state}&limit=470&api_key=${key}`;
		dispatch({ type: 'loading' });

		fetch(url)
			.then((res) => {
				if (res.status === 404) {
					console.log('error');
					return dispatch({
						type: 'error',
						error: `No results found for ${state}. Please try again!`,
					});
				} else if (res.status === 200) {
					// console.log('200:', res);
					return res.json();
				}
			})
			.then((data) => {
				// console.log(data);
				dispatch({ type: 'success', data });
				// setParks(data.data);
				// console.log(parks.length);
				// console.log('results', res.data);
			})
			.catch((err) => {
				dispatch({
					type: 'error',
					error: 'Oops, something went wrong! Please try again later.',
				});
			});
	}, [state]);

	function showPark(park) {
		if (/[a-zA-Z]/.exec(filterValue)) {
			return park.activities.reduce((prev, curr) => {
				return curr.name.toLowerCase().includes(filterValue.toLowerCase())
					? true
					: prev;
			}, false);
		} else return true;
	}

	console.log(APIstate);

	return (
		<div className='parks-main'>
			<div className='form-inputs'>
				<SearchForm />
				<FilterForm setFilter={setFilter} filter={filterValue} />
			</div>
				{loading && <Message content={'Loading Results ...'} />}
				{error && <Message content={error} />}
				{!!result.length && <Message content={`Showing ${result.length} parks`} />}
			<div className='parks-container'>
				{!!result.length &&
					result.map((park) => {
						if (showPark(park)) {
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
