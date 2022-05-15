import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Product from "./product";

export default function Products() {
	const [searchParams] = useSearchParams();
	const [ productsList, setProductsList ] = useState([]);
	const page = searchParams.get("page");
	useEffect(() => {
		const url = `http://localhost:5000/products/?page=${page}`; //"https://mongodb-projeto-smoof.herokuapp.com/products"; 
        
		const promise = axios.get(url);

		promise
			.then(response => {
				setProductsList(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [page]);

	return (
		<Container>
			{
				productsList.map(productData => <Product {...productData}/>)
			}
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
	align-items: center;
    gap: 30px;
	padding-top: 20px;
`;