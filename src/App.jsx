import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import LocationPage from './components/LocationPage/LocationPage';
import ContactPage from './components/ContactPage/ContactPage';
// import ConstructionSite from './components/ConstructionSite/ConstructionSite';
import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			{/* <ConstructionSite /> */}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/menu' element={<MenuPage />} />
				<Route path='/sucursal' element={<LocationPage />} />
				<Route path='/contacto' element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
