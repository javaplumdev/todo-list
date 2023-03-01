import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContextProvider } from '../context/context';
import Modal from 'react-bootstrap/Modal';

const Main = () => {
	const { lists, addItem, show, setShow, handleClose, handleShow } =
		useContext(ContextProvider);

	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('');

	const changeStatus = (status) => {
		setStatus(status);
	};

	return (
		<div className="main">
			<div style={{ width: '520px' }}>
				<h1 className="text-center my-3">TODO LIST</h1>
				<div>
					<div className="d-flex justify-content-between">
						<Button variant="info" className="text-white" onClick={handleShow}>
							Add task
						</Button>
						<Dropdown>
							<Dropdown.Toggle
								variant="info"
								id="dropdown-basic"
								className="text-white"
							>
								All
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item>Incomplete</Dropdown.Item>
								<Dropdown.Item>Completed</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="bg-secondary mt-3 rounded p-3 text-white">
						{lists.length === 0 ? (
							<p>No todos</p>
						) : (
							lists.map((item) => {
								return <div key={item.name}>{item.title}</div>;
							})
						)}
					</div>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add todo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						onChange={(e) => setTitle(e.target.value)}
					/>

					<Form.Label className="mt-3">Status</Form.Label>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic" className="text-white w-100">
							All
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item onClick={() => changeStatus('Incomplete')}>
								Incomplete
							</Dropdown.Item>
							<Dropdown.Item onClick={() => changeStatus('Completed')}>
								Completed
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={() => addItem(title, status)}>
						Add task
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Main;
