import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";

import SizeModal from "./size-modal";

export default function AddToCartButton({ name }) {
	const [ isSizeModalOpen, setIsSizeModalOpen ] = useState(false);

	async function addToCart() {
		setIsSizeModalOpen(true);
	}

	return (
		<Container>
			{
				isSizeModalOpen?
					<SizeModal {...{isSizeModalOpen ,setIsSizeModalOpen, name}}/>
					:
					<MdAddShoppingCart onClick={addToCart}/>
			}
		</Container>
	);
}

const Container = styled.button`
    position: absolute;
    top: 25px;
    left: 35px;

	display: flex;

    width: calc(100% - 70px);

    color: #bbbbbb;

    background-color: transparent;

    >svg{
        font-size: 25px;

        box-shadow: none;
        
    }
`;