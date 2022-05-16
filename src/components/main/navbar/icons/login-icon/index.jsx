import { HiLogin, HiLogout } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../../../../contexts/UserContext";

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

	function goLogin() {
		return navigate("/login");
	}

	return (
		<div>
			{
				user?
					<HiLogout onClick={handleSignOut}/>
					:
					<HiLogin  onClick={goLogin}/>
			}
		</div>
	);
}
