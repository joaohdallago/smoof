import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

import Size from "./size";

export default function SizeModal({ setIsSizeModalOpen, name }) {
	const [ modelSizes, setModelSizes ] = useState([]);

	useEffect(() => {
		const url = "https://mongodb-projeto-smoof.herokuapp.com/products/filter";

		axios.post(url, {name})
			.then(res => {
				setModelSizes(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	},[name]);

	function sortedSizes() {
		const sizes = modelSizes.map(product => product.size);

		const uniqueSizes = sizes.filter((size, index) => sizes.indexOf(size) === index);

		return uniqueSizes.sort();
	}

	return(
		<Container>
			{
				modelSizes[0] ?
					<>
						<span>Escolha um dos tamanhos disponíveis:</span>

						<ul>
							{
								sortedSizes().map(num => <Size {...{num, setIsSizeModalOpen ,modelSizes}}/>)
							}
						</ul>
					</>
					:
					<PulseLoader
						color="white"
						size="10px"
					/>
			}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;

	padding: 5px;
	
	border-radius: 5px;
    background-color: black;
    >ul {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
`;