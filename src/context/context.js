import React, { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [sayHi, setSayHi] = useState('Tangina');
	const [lists, setLists] = useState([]);
	const [status, setStatus] = useState('Incomplete');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [category, setCategory] = useState('All');

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

	const getCategory = lists.filter((item) => item.status === category);

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

		setStatus('Incomplete');
		handleClose();
	};

	const removeItem = (id) => {
		const filteredItem = lists.filter((item) => item.id !== id);

		setLists(filteredItem);
	};

	const changeStatus = (status) => {
		setStatus(status);
	};

	const changeCheck = (id) => {
		lists.map((item) => {
			if (item.id === id) {
				if (item.status === 'Incomplete') {
					return (item.status = 'Completed');
				} else {
					return (item.status = 'Incomplete');
				}
			}
		});

		setChecked(!checked);
	};

	const filterStatus = (status) => {
		if (status === 'All') {
			console.log(lists);
		} else {
			const filteredItem = lists.filter((item) => item.status === status);

			console.log(filteredItem);
		}
	};

	return (
		<ContextProvider.Provider
			value={{
				category,
				setCategory,
				filterStatus,
				changeCheck,
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
				status,
				setStatus,
				changeStatus,
				getCategory,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
