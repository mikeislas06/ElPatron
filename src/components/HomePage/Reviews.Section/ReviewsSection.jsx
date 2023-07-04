import React from 'react';

import DecoratorTriangle from '../../common/DecoratorTriangle/DecoratorTriangle';

import decorator from '../../../assets/img/decoradores/decorator.png';
import reviews from './reviews';
import './ReviewsSection.scss';
import Review from './Review/Review';

const ReviewsSection = () => {
	return (
		<div className='Reviews'>
			<DecoratorTriangle direction={'up'} />
			<div className='Reviews__title'>
				<h4>Los que probaron nuestro bufet</h4>
				<div className='Reviews__title__decorator'>
					<img src={decorator} alt='' />
				</div>
				<p>Conoce la experiencia de nuestros comensales</p>
			</div>
			<div className='Reviews__users'>
				{reviews.map((review, index) => (
					<Review
						key={`${index} ${review.name}`}
						image={review.image}
						name={review.name}
						review={review.review}
					/>
				))}
			</div>
		</div>
	);
};

export default ReviewsSection;
