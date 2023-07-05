import React from 'react';

import './HomePage.scss';
import HeroSection from './HeroSection/HeroSection';
import HistorySection from './HistorySection/HistorySection';
import CardsSection from './CardsSection/CardsSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import DrinksSection from './DrinksSection/DrinksSection';
import SaladsSection from './SaladsSection/SaladsSection';
import ReviewsSection from './Reviews.Section/ReviewsSection';
import FooterSection from '../common/FooterSection/FooterSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<HistorySection />
			<CardsSection />
			<FeaturedSection />
			<DrinksSection />
			<SaladsSection />
			<ReviewsSection />
			<FooterSection />
		</>
	);
};

export default HomePage;
