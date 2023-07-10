import React from 'react';

import Button from '../../common/Button/Button';
import logo from '../../../assets/img/elPatronLogo.png';
import decorator from '../../../assets/img/decoradores/decorator.png';
import img1 from '../../../assets/img/hist1.jpg';
import img2 from '../../../assets/img/hist2.jpg';
import './HistorySection.scss';

const HistorySection = () => {
	return (
		<div className='History'>
			<div className='History__info'>
				<p className='History__info__main-title'>Descubre</p>
				<div className='History__info__logo'>
					<img src={logo} alt='El Patrón Logo' />
				</div>
				<div className='History__info__decorator'>
					<img src={decorator} alt='' />
				</div>
				<p className='History__info__secondary-title'>
					Nuestra deliciosa historia
				</p>
				{/* <p className='History__info__p1'>
					Con más de 10 años de experiencia y 4 sucursales en la república
					mexicana, Picanha y Carvão se ha posicionado como una marca líder
					dentro del ramo de la gastronomía brasileña.
				</p> */}
				<p className='History__info__p2'>
					Nuestro principal objetivo es ofrecerle a nuestros clientes un
					servicio de calidad y los más finos cortes de carne al carbón en
					espadas brasileñas. Nuestro sistema rotativo le permitirá ser
					partícipe de un desfile de sabores por su plato. Se deleitará de
					pollo, res, cerdo, pavo y otras preparaciones; además de una
					gran variedad de ensaladas frescas dulces y saladas, guisados, postres
					y mucho más en nuestra barra de ensaladas.
				</p>
				<div className='History__info__button'>
					<Button
						path={'/contacto'}
						text={'Reservaciones'}
						type={'contained'}
					/>
				</div>
			</div>
			<div className='History__images'>
				<img src={img1} alt='' className='img1' />
				<img src={img2} alt='' className='img2' />
			</div>
		</div>
	);
};

export default HistorySection;
