import React from 'react';

import video from '../../../assets/video/vidBackground.mp4';
import decorator from '../../../assets/img/decoradores/decorator.png';
import './HeroSection.scss';
import Button from '../../common/Button/Button';

const HeroSection = () => {
	return (
		<div className='Hero'>
			<div className='Hero__video-background'>
				<video autoPlay loop muted disablePictureInPicture>
					<source src={video} type='video/mp4' />
				</video>
			</div>
			<div className='Hero__content'>
				<img src={decorator} alt='' className='Hero__content__decoration' />
				<div className='Hero__content__title1'>La auténtica churrascaría</div>
				<div className='Hero__content__title2'>Brasileira en México</div>
				<div className='Hero__content__description'>
					{' '}
					Los más finos cortes de carne al carbón en espadas brasileñas
				</div>
				<div className='Hero__content__buttons'>
					<Button
						text={'Reservaciones'}
						path={'/reservaciones'}
						type={'contained'}
					/>
					<Button text={'Explora el menú'} path={'menu'} type={'outlined'} />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
