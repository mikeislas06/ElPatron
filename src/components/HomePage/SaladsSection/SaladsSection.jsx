import React from 'react';

import Button from '../../common/Button/Button';

import salad from '../../../assets/img/decoradores/salads.png';
import './SaladsSection.scss';

const SaladsSection = () => {
	return (
		<div className='Salads'>
			<div className='Salads__background'>
				<div className='Salads__content'>
					<div className='Salads__content__decorator'>
						<div className='line'></div>
						<div className='img'>
							<img src={salad} alt='' />
						</div>
						<div className='line'></div>
					</div>
					<p>Saludables, frescas y naturales</p>
					<h4>Barra de ensaladas</h4>
					<p>
						Extensa y exquisita barra de ensaladas para acompañar los cortes.
						Incluye frutas y verduras de temporada, dulces o saladas. Además de
						algunas opciones adicionales.
					</p>
					<Button
						path={'/reservaciones'}
						text={'Reserve una mesa'}
						type={'contained'}
					/>
				</div>
			</div>
		</div>
	);
};

export default SaladsSection;
