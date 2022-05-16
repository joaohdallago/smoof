import styled from "styled-components";

import AddToCartButton from "./add-to-cart-button";

export default function Product({
	name,
	media,
	price,
}) {
	
	return (
		<Container>
			<div>
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
			</div>
			<span>{name}</span>
			<span>U$ {price}</span>
			<AddToCartButton {...{name}}/>
		</Container>
	);
}

const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: space-evenly;

	width: 330px;
	
	padding: 10px;
	border-radius: 10px;
	box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);

	background-color: #F8F8F8;
	
	>span {
		text-align: center;
		font-size: 20px;
		color: #bbbbbb;
	}
	>div{
		display: flex;
		align-items: center;

		height: 220px;
		width: 300px;

		>img {
        width: 100%;
    	}
	}
    
`;