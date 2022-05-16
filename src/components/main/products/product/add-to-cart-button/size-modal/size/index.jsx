import { useContext } from "react";

import UserContext from "../../../../../../../contexts/UserContext";
import CartContext from "../../../../../../../contexts/CartContext";

export default function Size({ num, setIsSizeModalOpen ,modelSizes }) {
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext); 

	const productData = modelSizes.find(product => product.size === num);

	function selectSize() {
		if (!user) {
			alert("você não está logado!");

			setIsSizeModalOpen(false);

			return;
		}

		setCart({
			...cart,
			products: [...cart.products, productData]
		});
		setIsSizeModalOpen(false);
	};
	
	return (
		<li onClick={selectSize}>
			{num}
		</li>
	);
}