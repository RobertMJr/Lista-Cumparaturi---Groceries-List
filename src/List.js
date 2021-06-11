import React from 'react';
// import { GrEdit, GrTrash } from 'react-icons/gr';
import { FaEdit } from 'react-icons/fa';
import { GoTrashcan } from 'react-icons/go';

const List = ({ items, editItem, removeItem }) => {
	return (
		<div className='grocery-list'>
			{items.map((item) => {
				const { id, title } = item;
				return (
					<article key={id} className='grocery-item'>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button
								type='button'
								className='edit-btn'
								onClick={() => editItem(id)}
							>
								<FaEdit />
							</button>
							<button
								type='button'
								className='delete-btn'
								onClick={() => removeItem(id)}
							>
								<GoTrashcan />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default List;
