import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import LocationPage from './components/LocationPage/LocationPage';
import ReservationsPage from './components/ReservationsPage/ReservationsPage';
import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/menu' element={<MenuPage />} />
				<Route path='/sucursal' element={<LocationPage />} />
				<Route path='/reservaciones' element={<ReservationsPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
