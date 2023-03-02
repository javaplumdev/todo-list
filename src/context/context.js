import React, { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [sayHi, setSayHi] = useState('Tangina');

	const [lists, setLists] = useState([]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [checked, setChecked] = useState(false);

	const months = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
	];

	const addItem = (title, status) => {
		const id = Math.floor(Math.random() * 10000);

		const date = new Date();

		let month = months[date.getMonth()];

		setLists((prevState) => [
			...prevState,
			{
				id: id,
				title: title,
				status: status,
				dateToday: month + '/' + date.getDate() + '/' + date.getFullYear(),
			},
		]);

		if (status === 'Completed') {
			setChecked(true);
		} else if (status === 'Incomplete') {
			setChecked(false);
		}

		handleClose();
	};

	const removeItem = (id) => {
		const filteredItem = lists.filter((item) => item.id !== id);

		setLists(filteredItem);
	};

	return (
		<ContextProvider.Provider
			value={{
				sayHi,
				addItem,
				show,
				setShow,
				handleClose,
				handleShow,
				lists,
				removeItem,
				setChecked,
				checked,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
