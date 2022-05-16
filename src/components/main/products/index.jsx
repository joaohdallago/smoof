import styled from "styled-components";
import { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

import Product from "./product";
import Loader from "./loader";

export default function Products() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [ productsList, setProductsList ] = useState([]);; 

	const page = searchParams.get("page") || 1;
	useEffect(() => {
		const url = `https://mongodb-projeto-smoof.herokuapp.com/products/?page=${page}`; 
        
		const promise = axios.get(url);

		promise
			.then(response => {
				setProductsList(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [page]);

	function nextPage() {
		setSearchParams({...searchParams, page: parseInt(page) + 1});
	}

	return (
		<Container>
			{
				productsList[0] ?
					<>
						{productsList.map(productData => <Product {...productData}/>)}
						{page <= 5 && <Loader {...{nextPage}}/>}
					</>
					:
					<PulseLoader />
			}	
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
	align-items: center;
    gap: 30px;
	padding: 20px 0;
`;