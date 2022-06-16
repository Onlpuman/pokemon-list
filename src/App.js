import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './Pages/Main';
import { Details } from './Pages/Details';

function App() {
	return (
		<BrowserRouter basename={'pokemon-list'}>
			<Routes>
				<Route path={'/'} element={<Navigate to="/1" replace />}/>
				<Route path={'/:page'} element={<Main/>}/>
				<Route path={'/pokemon/:name'} element={<Details/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;