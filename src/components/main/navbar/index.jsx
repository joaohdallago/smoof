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
	display: flex;

	height: 60px;

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
		}
	}
`;
