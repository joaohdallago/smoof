import { HiFilter } from "react-icons/hi";
import { useContext } from "react";

import FilterContext from "../../../../../contexts/FilterContext";
import CartContext from "../../../../../contexts/CartContext";

export default function Filter() {
	const { filter, setFilter } = useContext(FilterContext);
	const { cart, setCart } = useContext(CartContext);

	function toggleModal() {
		setFilter({...filter, isModalOpen: !filter.isModalOpen});

		setCart({...cart, isModalOpen: false});
	}

	const style = filter.isModalOpen ?
		{
			backgroundColor: "black",
			color: "white"
		}
		:
		{
			backgroundColor: "white",
			color: "black"
		};

	return (
		<div {...{style}} onClick={toggleModal}>
			<HiFilter />
		</div>
	);
}