import styled from "styled-components";

import Filter from "./filter";
import LoginIcon from "./login-icon";
import Cart from "./cart";

export default function Icons() {
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
	width: 100%;

	box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
	> div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100%;
		width: 100%;

		background-color: white;

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