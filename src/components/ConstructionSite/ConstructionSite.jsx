import React from 'react';

import logo from '../../assets/img/elPatronLogo.png';
import './ConstructionSite.scss';

const ConstructionSite = () => {
	return (
		<div className='coverPage'>
			<div className='__coverPage-content'>
				<img
					src={logo}
					alt='El Patrón Logo'
					style={{ width: '70%', margin: '0 auto' }}
				/>
				<h3>
					Estamos construyendo algo <strong>FANTASTICO!</strong>
				</h3>
				<div className='socialMedia'>
					<a className='socialIcon' href='#'>
						<i className='fas fa-envelope'></i>
					</a>
					<a className='socialIcon' href='#'>
						<i className='fab fa-facebook-f'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ConstructionSite;
