import styled from "styled-components";
import { useContext } from "react";

import CartContext from "../../../../../../contexts/CartContext";

export default function TotalPrice() {
	const { cart } = useContext(CartContext);

	let totalPrice = 0;
	cart.products.forEach(item => totalPrice += item.price);
	return (
		<Container>
			<span>Total</span>
			<span>R$ {totalPrice},00</span>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    >span {
        font-weight: bold;
    }
`;