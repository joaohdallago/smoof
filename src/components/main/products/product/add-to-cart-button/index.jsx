import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { useContext } from "react";

import UserContext from "../../../../../contexts/UserContext";

export default function AddToCartButton() {
	const { user } = useContext(UserContext);

	function addToCart() {
		if (!user) return alert("você não está logado!");

		console.log(user);
	}

	return (
		<Container
			onClick={addToCart}
		>
			<MdAddShoppingCart />
		</Container>
	);
}

const Container = styled.button`
    position: absolute;
    top: 25px;
    left: 35px;

    color: #bbbbbb;

    background-color: transparent;
    :active {
        color: black;
        
        transition: 0.2s;
    }

    >svg{
        font-size: 25px;

        box-shadow: none;
        
    }
`;