import styled from 'styled-components';

import AddToCartButton from './add-to-cart-button';

export default function Product({
	model,
	img,
	price
}) {
	return (
		<Container>
			<h2>{model}</h2>
			<img src={img} alt={model} />
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