import React, { useState } from 'react';
import './Form.scss';

const whats = '2227074526';

const Form = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [asunto, setAsunto] = useState('');
	const [numPersonas, setNumPersonas] = useState('');
	const [fecha, setFecha] = useState('');
	const [hora, setHora] = useState('');
	const [telefono, setTelefono] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes utilizar la API de WhatsApp para enviar los datos del formulario al número deseado
		const mensaje = `Nombre: ${nombre}\nCorreo electrónico: ${email}\nAsunto: ${asunto}\nNúmero de personas: ${numPersonas}\nFecha: ${fecha}\nHora: ${hora}\nTeléfono de contacto: ${telefono}`;
		const url = `https://api.whatsapp.com/send?phone=${whats}&text=${encodeURIComponent(
			mensaje
		)}`;
		window.open(url, '_blank');
		// Aquí puedes reiniciar los campos del formulario si lo deseas
		setNombre('');
		setEmail('');
		setAsunto('');
		setNumPersonas('');
		setFecha('');
		setHora('');
		setTelefono('');
	};

	const generarOpcionesHora = () => {
		const opcionesHora = [];
		const horaInicio = 13;
		const horaFin = 20;

		for (let hora = horaInicio; hora <= horaFin; hora++) {
			opcionesHora.push(`${hora.toString().padStart(2, '0')}:00`);
		}

		return opcionesHora;
	};

	return (
		<form className='formulario-contacto' onSubmit={handleSubmit}>
			<p className='title'>Formulario de reservaciones</p>
			<div className='campo'>
				<label htmlFor='nombre'>Nombre:</label>
				<input
					type='text'
					id='nombre'
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					required
				/>
			</div>
			<div className='campo'>
				<label htmlFor='email'>Correo electrónico:</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className='campo'>
				<label htmlFor='asunto'>Asunto:</label>
				<input
					type='text'
					id='asunto'
					value={asunto}
					onChange={(e) => setAsunto(e.target.value)}
					required
				/>
			</div>
			<div className='campo'>
				<label htmlFor='numPersonas'>Número de personas:</label>
				<input
					type='number'
					id='numPersonas'
					value={numPersonas}
					onChange={(e) => setNumPersonas(e.target.value)}
					required
				/>
			</div>
			<div className='campo'>
				<label htmlFor='fecha'>Fecha:</label>
				<input
					type='date'
					id='fecha'
					value={fecha}
					onChange={(e) => setFecha(e.target.value)}
					required
				/>
			</div>
			<div className='campo'>
				<label htmlFor='hora'>Hora:</label>
				<select
					id='hora'
					value={hora}
					onChange={(e) => setHora(e.target.value)}
					required
				>
					<option value=''>Seleccione una hora</option>
					{generarOpcionesHora().map((opcion) => (
						<option key={opcion} value={opcion}>
							{opcion}
						</option>
					))}
				</select>
			</div>
			<div className='campo'>
				<label htmlFor='telefono'>Teléfono de contacto:</label>
				<input
					type='tel'
					id='telefono'
					value={telefono}
					onChange={(e) => setTelefono(e.target.value)}
					required
				/>
			</div>
			<div className='campo boton-enviar'>
				<button type='submit'>Enviar</button>
			</div>
		</form>
	);
};

export default Form;
