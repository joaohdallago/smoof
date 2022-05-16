import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

import AuthContainer from "../../theme/AuthContainer";

import Header from "./header";

import UserContext from "../../contexts/UserContext";
import LoadingContext from "../../contexts/LoadingContext";

export default function SignIn() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);
	const { isLoading, setIsLoading } = useContext(LoadingContext);
	console.log(
		{isLoading, setIsLoading}
	);
	async function handleSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		try {
			const response = await axios.post(
				"https://mongodb-projeto-smoof.herokuapp.com/signin",
				{
					email,
					password,
				}
			);
			const { token } = response.data;
			setUser({ token });
			alert("Logado com sucesso!");
			navigate("/");
		} catch (e) {
			alert("Infelizmente não foi possível logar. Tente novamente!");
			console.log(e.response);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Container>
			<Header />
			<AuthContainer>
				<Input
					placeholder="E-mail"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Senha"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type="submit" onClick={handleSubmit}>
					{
						isLoading?
							<PulseLoader
								color="white"
								size='10px'
								speedMultiplier='0.5'
							/>
							:
							"Logar"
					}
				</Button>
			</AuthContainer>
			<Link to="/signup">Ainda não tem uma conta? Cadastra-se aqui!</Link>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	width: 240px;
	height: 50px;

	border-radius: 5px;
	border: 1px solid;
	border-color: black;

	padding: 6px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;


	background-color: black;
	color: white;

	height: 30px;

	border-radius: 5px;

	margin-bottom: 5px;
`;
