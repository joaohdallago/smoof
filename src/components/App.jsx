import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "../theme/GlobalStyles";

import Login from "./login";
import Signup from "./signup";
import Main from "./main";

import LoadingContext from "../contexts/LoadingContext";
import UserContext from "../contexts/UserContext";

export default function App() {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ user, setUser ] = useState(null);

	return (
		<>
			<GlobalStyles />
			<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
				<UserContext.Provider value={{ user, setUser }}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</BrowserRouter>
				</UserContext.Provider>
			</LoadingContext.Provider>
		</>
	);
}
