import styled from "styled-components";
import { useContext } from "react";

import FilterModal from "./filter-modal";
import CartModal from "./cart-modal";
import Icons from "./icons";

import FilterContext from "../../../contexts/FilterContext";
import CartContext from "../../../contexts/CartContext";

export default function Navbar() {
	const { cart } = useContext(CartContext);
	const { filter } = useContext(FilterContext);

	return (
		<Container>
			<Icons />
			{cart.isModalOpen && <CartModal />}
			{filter.isModalOpen && <FilterModal />}
		</Container>
	);
}

const Container = styled.div`
	position: sticky;
	top: -3px;
	left: 0;
	right: 0;
	z-index: 1;

	

	display: flex;
	flex-direction: column;

	margin-top: 80px;
`;
