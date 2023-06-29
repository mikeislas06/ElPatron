import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.scss';

const Button = ({ text, path, type }) => {
	return (
		<button className={`Button ${type}`}>
			<NavLink to={path} activeclassname='active'>
				{text}
			</NavLink>
		</button>
	);
};

export default Button;
