import Navigation from './Components/Navigation';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About'
import parksData from "./data/parks_data.json";

function App() {
  console.log(parksData);
	return <div className='App'>
  <Navigation />
  <Routes>
    <Route path='/' element={<About />}></Route>
  </Routes>
  </div>;
}

export default App;
