import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from './Movies';
import Series from './Series';
import Header from './Header';
import Footer from './Footer';

/**
 * // TODO:
 */
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App;
