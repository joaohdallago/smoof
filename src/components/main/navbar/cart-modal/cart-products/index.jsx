import styled from "styled-components";
import { useContext } from "react";

import CartContext from "../../../../../contexts/CartContext";

import CartProduct from "./cart-product";
import TotalPrice from "./total-price";

export default function CartProducts() {
	const { cart } = useContext(CartContext);
	return (
		<Container>
			{
				cart.products.map(productData => <CartProduct {...{productData}}/>)
			}

			<TotalPrice />
		</Container>
	);
}

const Container = styled.div`
    display: flex;
	flex-direction: column;
	gap: 1px;
`;