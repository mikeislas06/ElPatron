import React from 'react';

import Button from '../../common/Button/Button';
import decorator from '../../../assets/img/decoradores/decorator.png';
import cortes from './cortes.js';
import './FeaturedSection.scss';
import Steak from './Steak/Steak';

const FeaturedSection = () => {
	return (
		<div className='Featured'>
			<div className='Featured__hero__container'>
				<div className='Featured__decorator'></div>
				<div className='Featured__hero'>
					<div className='Featured__hero__content'>
						<h4>Delicias destacadas</h4>
						<p>Pide el corte al término de tu preferencia</p>
						<div className='Featured__hero__content__decorator'>
							<img src={decorator} alt='' />
						</div>
						<p>Más de 16 cortes a elegir</p>
					</div>
				</div>
			</div>
			<div className='Featured__featured-steaks'>
				<div className='Featured__featured-steaks__grid'>
					{cortes?.map((corte, index) => (
						<Steak
							key={`${index} ${corte.name}`}
							image={corte.image}
							name={corte.name}
							description={corte.description}
						/>
					))}
				</div>
			</div>
			<div className='Featured__menu-button'>
				<Button path='/menu' text='Ver menú' type='contained' />
			</div>
		</div>
	);
};

export default FeaturedSection;
