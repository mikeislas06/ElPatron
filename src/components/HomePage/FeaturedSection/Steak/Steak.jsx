import React from 'react';

import './Steak.scss';

const Steak = ({ image, name, description }) => {
	return (
		<div className='Steak'>
			<img className='Steak__image' src={image} alt={name} />
			<p className='Steak__name'>{name}</p>
			<p className='Steak__description'>{description}</p>
		</div>
	);
};

export default Steak;
