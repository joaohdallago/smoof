import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

export default function AddToCartButton() {

	return (
		<Container>
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