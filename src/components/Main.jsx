import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContextProvider } from '../context/context';
import Modal from 'react-bootstrap/Modal';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';

const Main = () => {
	const {
		lists,
		addItem,
		show,
		removeItem,
		handleClose,
		handleShow,
		setChecked,
		checked,
	} = useContext(ContextProvider);

	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('Incomplete');

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
					<div
						className="mt-3 rounded p-3 text-white "
						style={{ backgroundColor: '#ECEDF6' }}
					>
						{lists.length === 0 ? (
							<p className="text-center text-dark">No todos</p>
						) : (
							lists.map((item) => {
								return (
									<div
										key={item.id}
										className="text-dark bg-white p-2 rounded d-flex justify-content-between my-2 align-items-center"
									>
										<div className="d-flex">
											<input
												type="checkbox"
												style={{ width: '30px' }}
												defaultChecked={checked}
												onChange={() => setChecked(!checked)}
											/>
											<div className="mx-2">
												{item.title}
												<br></br>
												{item.dateToday}
											</div>
										</div>
										<div>
											<button
												className="mx-3 p-2 border-0 text-dark rounded"
												onClick={() => removeItem(item.id)}
											>
												<BsTrashFill />
											</button>
											<button className="p-2 border-0 text-dark rounded">
												<BsPencilFill />
											</button>
										</div>
									</div>
								);
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
							{status}
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
