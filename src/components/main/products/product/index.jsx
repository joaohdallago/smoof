import styled from "styled-components";

import AddToCartButton from "./add-to-cart-button";

export default function Product({
	name,
	media,
	price
}) {
	return (
		<Container>
			<h2>{name}</h2>
			<img src={media[0]} alt={name} />
			<h2>R$ {price}</h2>
			<AddToCartButton />
		</Container>
	);
}

const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    >img {
        width: 100%;
    }
    
`;