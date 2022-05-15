import styled from "styled-components";

import Cart from "./cart";
import Filter from "./filter";
import LoginIcon from "./login-icon";

export default function Navbar() {
	return (
		<Container>
			<LoginIcon />
			<Cart />
			<Filter />
		</Container>
	);
}

const Container = styled.div`
	position: sticky;
	top: -3px;
	left: 0;
	right: 0;
	z-index: 1;

	height: 60px;

	display: flex;

	margin-top: 80px;

	background-color: white;
	box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
	> div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
		width: 100%;

		:active {
			color: white;
			background-color: black;

			transition: 0.2s;
		}

		> svg {
			font-size: 30px;
			box-shadow: none;
		}
	}
`;
