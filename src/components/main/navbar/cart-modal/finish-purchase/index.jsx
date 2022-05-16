import styled from "styled-components";
import { useContext } from "react";

import CartContext from "../../../../../contexts/CartContext";

export default function FinishPurchase() {
	const { setCart } = useContext(CartContext);

	function purchase() {
		alert("Compra realizada com sucesso!");

		setCart({
			products: [],
			isModalOpen: false
		});

	}

	return(
		<Container onClick={purchase}>
            finalizar compra
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    border: dashed white 2px;
    border-radius: 20px;
`;