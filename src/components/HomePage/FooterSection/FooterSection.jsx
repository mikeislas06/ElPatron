import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

import Button from '../../common/Button/Button';
import decorator from '../../../assets/img/decoradores/decorator.png';
import './FooterSection.scss';
import DecoratorTriangle from '../../common/DecoratorTriangle/DecoratorTriangle';

const FooterSection = () => {
	return (
		<div className='Footer'>
			<DecoratorTriangle direction={'down'} />
			<div className='Footer__background'>
				<div className='Footer__content'>
					<div></div>
					<div className='Footer__content__main'>
						<h4>Brasil en tu mesa</h4>
						<div className='Footer__content__decorator'>
							<img src={decorator} alt='' />
						</div>
						<p>
							Nuestros cortes son de la mejor calidad y están en el punto exacto
							de cocción para que te deleites con su verdadero sabor.
						</p>
						<Button
							path={'/reservaciones'}
							text={'Reserva tu mesa'}
							type={'contained'}
						/>
						<p>O llámanos al 222-456-7856</p>
						<div className='Footer__content__social-media'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noreferrer'
								className='Footer__content__social-media__item'
							>
								<IoLogoFacebook />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noreferrer'
								className='Footer__content__social-media__item'
							>
								<IoLogoInstagram />
							</a>
						</div>
					</div>
					<div className='Footer__content__copyright'>
						<p>Copyright © 2023 El Patrón Churrascaría Brasileña</p>
						<p>Creado por El Patrón Churrascaría Brasileña</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
