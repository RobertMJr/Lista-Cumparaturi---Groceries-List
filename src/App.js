import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

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
			const newItem = {
				id: new Date().getTime().toString(),
				title: name
			};
			setList([ ...list, newItem ]);
			setName('');
		}
	};

	const showAlert = (show = false, msg = '', type = '') => {
		setAlert(show, msg, type);
	};

	const clearList = () => {
		showAlert(true, 'Empty List', 'danger');
		setList([]);
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && (
					<Alert {...alert} removeAlert={showAlert} list={list} />
				)}
				<h3>Listă Cumpărături</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='Ex: Ouă'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<button className='submit-btn' type='submit'>
						{isEditing ? 'modifică' : 'adaugă'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className='grocery-container'>
					<List items={list} />
					<button className='clear-btn' onClick={clearList}>
						șterge listă
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
