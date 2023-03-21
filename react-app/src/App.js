import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from './Movies';
import Series from './Series';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

/**
 * // TODO:
 */
function App() {
	return (
		<BrowserRouter>
			<div className='App-content'>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/series" element={<Series />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App;
