import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

import logo from '../../assets/img/elPatronLogo.png';
import './Navbar.scss';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<div className='Navbar'>
				<div className='Navbar__logo'>
					<NavLink to='/'>
						<img src={logo} alt='El Patrón logo' />
					</NavLink>
				</div>
				<button
					className='Navbar__menu__icon'
					onClick={() => setShowMenu((prev) => !prev)}
				>
					<FaBars />
				</button>
				<div className='Navbar__menu'>
					<NavLink
						to='/'
						className='Navbar__menu__item'
						activeClassName='active'
					>
						Inicio
					</NavLink>
					<NavLink
						to='/menu'
						className='Navbar__menu__item'
						activeClassName='active'
					>
						Menú
					</NavLink>
					<NavLink
						to='/sucursal'
						className='Navbar__menu__item'
						activeClassName='active'
					>
						Sucursal
					</NavLink>
					<NavLink
						to='/contacto'
						className='Navbar__menu__item'
						activeClassName='active'
					>
						Contacto
					</NavLink>
				</div>
			</div>
			<div
				className={`Navbar__menu__dropdown ${showMenu ? 'visible' : 'hidden'}`}
			>
				<NavLink
					to='/'
					className='Navbar__menu__dropdown_item'
					activeClassName='active'
					onClick={() => setShowMenu(false)}
				>
					Inicio
				</NavLink>
				<NavLink
					to='/menu'
					className='Navbar__menu__dropdown_item'
					activeClassName='active'
					onClick={() => setShowMenu(false)}
				>
					Menú
				</NavLink>
				<NavLink
					to='/sucursal'
					className='Navbar__menu__dropdown_item'
					activeClassName='active'
					onClick={() => setShowMenu(false)}
				>
					Sucursal
				</NavLink>
				<NavLink
					to='/contacto'
					className='Navbar__menu__dropdown_item'
					activeClassName='active'
					onClick={() => setShowMenu(false)}
				>
					Contacto
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
