import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from '../theme/GlobalStyles';

import Login from './login';
import Signup from './signup';
import Main from './main';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/login" element={<Login />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
