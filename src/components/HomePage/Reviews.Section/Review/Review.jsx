import React from 'react';

import './Review.scss';

const Review = ({ image, name, review }) => {
	return (
		<div className='Review'>
			<div className='Review__review'>{review}</div>
			<div className='Review__user-info'>
				<img src={image} alt='Imagen de comensal' />
				<p> - {name}</p>
			</div>
		</div>
	);
};

export default Review;
