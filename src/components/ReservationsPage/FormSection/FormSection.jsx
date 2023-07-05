import React from 'react';

import './FormSection.scss';
import DecoratorTriangle from '../../common/DecoratorTriangle/DecoratorTriangle';
import Form from './Form/Form';

const FormSection = () => {
	return (
		<div style={{ position: 'relative' }}>
			<DecoratorTriangle direction={'up'} />
			<div className='Form'>
				<div className='Form__disclaimer'>
					<ul>
						<li>Rellena el formulario para solicitar tu reservación.</li>
						<li>
							Ésta no será válida hasta que sea confirmada vía correo
							electrónico o telefónicamente por la sucursal.
						</li>
					</ul>
				</div>
				<div className='Form__form'>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default FormSection;
