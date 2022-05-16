import styled from "styled-components";
import { useContext } from "react";

import CartProducts from "./cart-products";
import FinishPurchase from "./finish-purchase";
import EmptyCart from "./empty-cart";

import CartContext from "../../../../contexts/CartContext";

export default function CartModal() {
	const { cart } = useContext(CartContext);

	return (
		<Container>
			{
				cart.products[0]?
					<>
						<CartProducts />
						<FinishPurchase />
					</>
					:
					<EmptyCart />
			}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
    flex-direction: column;
	gap: 20px;

	padding: 15px;

	color: white;
	background-color: black;
`;