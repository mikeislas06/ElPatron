import React from 'react';

import {
	IoLocationSharp,
	IoTimeOutline,
	IoCall,
	IoLogoWhatsapp,
	// IoLogoFacebook,
	// IoLogoInstagram,
} from 'react-icons/io5';

import './BranchesSection.scss';

const BranchesSection = () => {
	return (
		<div className='Branch'>
			<div className='Branch__info__container'>
				<div className='Branch__info__bg'>
					<h4 className='Branch__info__title'>Puebla, Puebla</h4>
					<div className='Branch__info address'>
						<IoLocationSharp className='Branch__info__address__icon icon' />
						<p className='Branch__info__address__text'>
							Plaza Opera, Local #1, Lomas de Angelópolis, Sonata, 72830 Puebla,
							Pue.
						</p>
					</div>
					<div className='Branch__info schedule'>
						<IoTimeOutline className='Branch__info__schedule__icon icon' />
						<p className='Branch__info__schedule__title'>
							Martes a domingo de 13:00 a 20:00 horas.
						</p>
					</div>
					<div className='Branch__info phone'>
						<IoCall className='Branch__info__phone__icon icon' />
						<p className='Branch__info__phone__text'>222 123 4567</p>
					</div>
					<div className='Branch__info whatsApp'>
						<IoLogoWhatsapp className='Branch__info__whatsApp__icon icon' />
						<p className='Branch__info__whatsApp__text'>222 123 4567</p>
					</div>
					<div className='Branch__info__social-media'></div>
				</div>
			</div>
			<div className='Branch__map'>
				<iframe
					className='Branch__map__iframe'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6214729197427!2d-98.28058799033813!3d18.992317454522265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb93b416dc36b%3A0xbe2104ebfa8be565!2sEl%20Patr%C3%B3n%20Churrascar%C3%ADa%20Brasile%C3%B1a!5e0!3m2!1ses-419!2smx!4v1688507032204!5m2!1ses-419!2smx'
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
					title='Google maps ubicacióin de El Patrón Churrascaría Brasileña'
				></iframe>
			</div>
		</div>
	);
};

export default BranchesSection;
