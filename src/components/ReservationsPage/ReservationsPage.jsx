import React from 'react';

import './ReservationsPage.scss';
import InformationSection from './InformationSection/InformationSection';
import FormSection from './FormSection/FormSection';
import FooterSection from '../common/FooterSection/FooterSection';

const ReservationsPage = () => {
	return (
		<>
			<InformationSection />
			<FormSection />
			<FooterSection />
		</>
	);
};

export default ReservationsPage;
