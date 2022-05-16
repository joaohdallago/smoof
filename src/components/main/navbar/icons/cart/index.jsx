import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";

import UserContext from "../../../../../contexts/UserContext";
import CartContext from "../../../../../contexts/CartContext";
import FilterContext from "../../../../../contexts/FilterContext";

export default function Cart() {
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const { filter,setFilter } = useContext(FilterContext);

	function toggleModal() {
		if (!user) return alert("Você precisa estar logado para usar o carrinho!");

		setCart({...cart, isModalOpen: !cart.isModalOpen});

		setFilter({...filter, isModalOpen: false});
	}

	const style = cart.isModalOpen ?
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
		<div onClick={toggleModal} {...{style}}>
			<MdShoppingCart />
		</div>
	);
}