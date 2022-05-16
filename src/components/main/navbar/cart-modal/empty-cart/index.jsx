import styled from "styled-components";

export default function EmptyCart() {
	return (
		<Container>
            Seu carrinho está vazio!
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;