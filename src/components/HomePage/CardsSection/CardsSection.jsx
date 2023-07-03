import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { IoRestaurant, IoWine, IoLocationSharp } from 'react-icons/io5';
// import useWindowSize from '../../../hooks/useWindowSize';

import './CardsSection.scss';

const CardsSection = () => {
	// const { width } = useWindowSize();
	const [cardsFlipped, setCardsFlipped] = useState({
		c1: false,
		c2: false,
		c3: false,
	});
	return (
		<>
			<div style={{ position: 'relative' }}>
				<div className='Cards__decorator'></div>
			</div>
			<div className='Cards'>
				<div style={{ width: '100%' }}>
					<ReactCardFlip
						isFlipped={cardsFlipped['c1']}
						flipDirection='vertical'
						containerClassName='Cards__card'
					>
						<div
							className='Cards__card__front c1'
							onMouseEnter={() =>
								setCardsFlipped({ c1: true, c2: false, c3: false })
							}
						>
							<IoLocationSharp style={{ fontSize: '2rem' }} />
							<p>Sucursal</p>
						</div>
						<div
							className='Cards__card__back b1'
							onMouseLeave={() =>
								setCardsFlipped({ c1: false, c2: false, c3: false })
							}
						>
							<h4>Sucursales</h4>
							<p>
								Estamos para servirle en nuestras 4 sucursales localizadas en
								las diferentes regiones de la República Mexicana.
							</p>
						</div>
					</ReactCardFlip>
				</div>
				<div style={{ width: '100%' }}>
					<ReactCardFlip
						isFlipped={cardsFlipped['c2']}
						flipDirection='vertical'
						containerClassName='Cards__card'
					>
						<div
							className='Cards__card__front c2'
							onMouseEnter={() =>
								setCardsFlipped({ c1: false, c2: true, c3: false })
							}
						>
							<IoRestaurant style={{ fontSize: '2rem' }} />
							<p>Experiencia</p>
						</div>
						<div
							className='Cards__card__back b2'
							onMouseLeave={() =>
								setCardsFlipped({ c1: false, c2: false, c3: false })
							}
						>
							<h4>Experiencia</h4>
							<p>
								Toda una experiencia culinaria, con nuestro sistema rotativo con
								más de 16 cortes en espada al carbón traídos a su mesa y con una
								barra de ensaladas y postres muy completa.
							</p>
						</div>
					</ReactCardFlip>
				</div>
				<div style={{ width: '100%' }}>
					<ReactCardFlip
						isFlipped={cardsFlipped['c3']}
						flipDirection='vertical'
						containerClassName='Cards__card'
					>
						<div
							className='Cards__card__front c3'
							onMouseEnter={() =>
								setCardsFlipped({ c1: false, c2: false, c3: true })
							}
						>
							<IoWine style={{ fontSize: '2rem' }} />
							<p>Bebidas</p>
						</div>
						<div
							className='Cards__card__back b3'
							onMouseLeave={() =>
								setCardsFlipped({ c1: false, c2: false, c3: false })
							}
						>
							<h4>Bebidas</h4>
							<p>
								Contamos con una barra de licores exquisitos para bebidas
								nacionales e internacionales y una cava de vino tinto.
							</p>
						</div>
					</ReactCardFlip>
				</div>
			</div>
		</>
	);
};

export default CardsSection;
