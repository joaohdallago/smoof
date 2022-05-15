import styled from "styled-components";

import AddToCartButton from "./add-to-cart-button";

export default function Product({
	name,
	media,
	price
}) {
	
	return (
		<Container>
			<img
				src={media[0]} alt={name}

				onMouseOver = {
					e => {
						e.target.src = media[1];
					}
				}

				onMouseOut = {
					e => {
						e.target.src = media[0];
					}
				}
			/>
			<span>{name}</span>
			<span>U$ {price}</span>
			<AddToCartButton />
		</Container>
	);
}

const Container = styled.div`
    position: relative;

	height: 252px;
	width: 330px;

    display: flex;
    flex-direction: column;
    align-items: center;
	
	padding: 5px;
	border-radius: 10px;
	box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);

	background-color: #F8F8F8;
	
	>span {
		font-size: 20px;
		color: #bbbbbb;
	}

    >img {
        width: 100%;
    }
`;