import Navigation from './Components/Navigation';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import parksData from './data/parks_data.json';
import ParksContainer from './Components/ParksContainer';
import ParkDetails from './Components/ParkDetails';

function App() {
	// console.log(parksData);
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={[<About />, <ParksContainer />]}></Route>
				{/* <Route path='/' element={<About />}></Route> */}
				<Route path='/parks/:parkCode' element={<ParkDetails />}></Route>
			</Routes>
		</div>
	);
}

export default App;