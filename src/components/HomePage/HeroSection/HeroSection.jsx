import React from 'react';

import video from '../../../assets/video/vidBackground.mp4';
import decorator from '../../../assets/img/decorator.png';
import './HeroSection.scss';
import Button from './Button/Button';

const HeroSection = () => {
	return (
		<div className='Hero'>
			<video className='Hero__video-background' autoPlay loop muted>
				<source src={video} type='video/mp4' />
			</video>
			<div className='Hero__content'>
				<img src={decorator} alt='' className='Hero__content__decoration' />
				<div className='Hero__content__title1'>El Patrón</div>
				<div className='Hero__content__title2'>Churrascaría Brasileña</div>
				<div className='Hero__content__description'>
					{' '}
					Los más finos cortes de carne al carbón en espadas brasileñas
				</div>
				<div className='Hero__content__buttons'>
					<Button text={'Reservaciones'} path={'contacto'} type={'contained'} />
					<Button text={'Explora el menú'} path={'menu'} type={'outlined'} />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
