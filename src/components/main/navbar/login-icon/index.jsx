import { HiLogin } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../../../contexts/UserContext.js";

export default function LoginIcon() {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	async function handleSignOut() {
		try {
			const response = await axios.get(
				"https://mongodb-projeto-smoof.herokuapp.com/signout",
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			console.log(response);
			setUser(response.data);
			navigate("/login");
		} catch (e) {
			alert("Não foi possível deslogar!");
			console.log(e);
		}
	}

	return (
		<div>
			<HiLogin onClick={handleSignOut} />
		</div>
	);
}
