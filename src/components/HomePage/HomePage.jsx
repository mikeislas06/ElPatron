import React from 'react';

import './HomePage.scss';
import HeroSection from './HeroSection/HeroSection';
import HistorySection from './HistorySection/HistorySection';
import CardsSection from './CardsSection/CardsSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<HistorySection />
			<CardsSection />
			<FeaturedSection />
		</>
	);
};

export default HomePage;
