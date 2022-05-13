import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import AuthContainer from "../../theme/AuthContainer";

import Header from "./header";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await axios.post("https://mongodb-projeto-smoof.herokuapp.com/signup", {
				name,
				email,
				password,
				confirmPassword,
			});

			alert("Cadastrado com sucesso!");
			navigate("/login");
		} catch (e) {
			alert(
				"Infelizmente não foi possível concluir o cadastro. Tente novamente!"
			);
			console.log(e);
		}
	}

	return (
		<Container>
			<Header />
			<AuthContainer>
				<Input
					placeholder="Nome"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
				<Input
					placeholder="Confirme a senha"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<Button type="submit" onClick={handleSubmit}>
					Cadastrar
				</Button>
			</AuthContainer>
			<Link to="/login">Já tem uma conta? Entre agora!</Link>
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
	background-color: black;
	color: white;

	height: 30px;

	border-radius: 5px;

	margin-bottom: 5px;
`;
