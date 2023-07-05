import React from 'react';

import decorator from '../../../assets/img/decoradores/decorator.png';
import './InformationSection.scss';

const InformationSection = () => {
	return (
		<div className='Info__hero'>
			<div className='Info__content'>
				<img src={decorator} alt='' />
				<p>Encuentra tu mesa para cualquier ocasión</p>
				<h3>Reservaciones </h3>
			</div>
		</div>
	);
};

export default InformationSection;
