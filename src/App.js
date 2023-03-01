import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextFunction } from './context/context';
import Main from './components/Main';

function App() {
	return (
		<ContextFunction>
			<div className="App">
				<Main />
			</div>
		</ContextFunction>
	);
}

export default App;
