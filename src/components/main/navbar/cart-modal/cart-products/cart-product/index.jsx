import styled from "styled-components";

export default function CartProduct({ productData }) {

	return (
		<Container>
			<span>{productData.name}</span>
			<span>R$ {productData.price},00</span>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
	align-items: center;

	>span {
		max-width: 70%;
	}
`;