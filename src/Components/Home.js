import React from 'react';
import SearchForm from './SearchForm';

function Home(props) {
    return (
        <div className='home'>
            <h2>Where do you want to go?</h2>
            <p>Selct a state to start your advanture</p>
            <SearchForm />
        </div>
    );
}

export default Home;