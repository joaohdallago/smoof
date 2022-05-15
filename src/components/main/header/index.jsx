import styled from "styled-components";

import Logo from "../../logo";

export default function Header() {
	return (
		<Container>
			<Logo color="white" />
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 80px;


	background-color: black;
`;
