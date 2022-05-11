import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from '../theme/GlobalStyles';

import Login from './login';
import Signup from './signup';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}/>
					<Route path="/signup" element={<Signup />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
