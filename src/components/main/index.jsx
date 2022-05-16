import styled from "styled-components";
import { useState } from "react";

import Header from "./header";
import Navbar from "./navbar";
import Products from "./products";

import FilterContext from "../../contexts/FilterContext";
import CartContext from "../../contexts/CartContext";

export default function Main() {
	const [ filter, setFilter ] = useState({
		isModalOpen: false,
	});
	const [ cart, setCart ] = useState({
		isModalOpen: false
	});

	return (
		<FilterContext.Provider value={{filter, setFilter}}>
			<CartContext.Provider value={{cart, setCart}}>
				<Container>
					<Header />
					<Navbar />
					<Products />
				</Container>
			</CartContext.Provider>
		</FilterContext.Provider>
	);
}

const Container = styled.div``;
