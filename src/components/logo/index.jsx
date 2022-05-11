import styled from 'styled-components';

export default function Logo(style) {

	return (
		<Container {...{style}}>
            smoof
		</Container>
	);
}

const Container = styled.h2`
    font-size: 50px;
    letter-spacing: 20px;
    text-align: center;
    font-family: 'Hubballi', cursive;
`;