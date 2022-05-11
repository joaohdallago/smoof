import styled from "styled-components";

import Logo from "../../logo";

export default function Header() {
	return (
		<Container>
			<Logo color='white'/>
		</Container>
	);
} 

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;

    box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.5);

    background-color: black;
`;