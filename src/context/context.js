import React, { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [sayHi, setSayHi] = useState('Tangina');

	const [lists, setLists] = useState([]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const addItem = (title, status) => {
		setLists((prevState) => [
			...prevState,
			{
				title: title,
				status: status,
			},
		]);

		console.log(lists);
	};

	return (
		<ContextProvider.Provider
			value={{ sayHi, addItem, show, setShow, handleClose, handleShow, lists }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
