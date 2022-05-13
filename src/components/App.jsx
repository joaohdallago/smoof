import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "../theme/GlobalStyles";

import Login from "./login";
import Signup from "./signup";
import Main from "./main";

import UserContext from "../contexts/UserContext";

export default function App() {
	const [user, setUser] = useState(null);

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
