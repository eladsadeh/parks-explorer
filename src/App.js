import Navigation from './Components/Navigation';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import parksData from './data/parks_data.json';
import ParksContainer from './Components/ParksContainer';
import ParkDetails from './Components/ParkDetails';
import Home from './Components/Home';

function App() {
	// console.log(parksData);
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:state' element={<ParksContainer />} />
				<Route path='/about' element={<About />} />
				<Route path='/parks/:parkCode' element={<ParkDetails />} />
			</Routes>
		</div>
	);
}

export default App;
