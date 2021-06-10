import React, { useState, useEffect } from 'react';

function App() {
	const [ name, setName ] = useState('');
	const [ list, setList ] = useState([]);
	const [ isEditing, setIsEditing ] = useState(false);
	const [ editID, setEditID ] = useState(null);
	const [ alert, setAlert ] = useState({
		show: false,
		msg: '',
		type: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			// display alert
		} else if (name && isEditing) {
			// handle edit
		} else {
			showAlert(true, 'success', 'Item added to the list');
		}
	};

	const showAlert = (show = false, msg = '', type = '') => {
		setAlert(show, msg, type);
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				<h3>Listă Cumpărături</h3>
				<div className='form-control'>
					<input type='text' className='grocery' />
					<button className='submit-btn'>Adaugă</button>
				</div>
			</form>
		</section>
	);
}

export default App;
