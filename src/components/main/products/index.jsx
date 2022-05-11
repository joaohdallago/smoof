import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Product from './product';

export default function Products() {
	const [ productsList, setProductsList ] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:5000/products'; //trocar pelo link do heroko e usar dotenv
        
		const promise = axios.get(url);

		promise
			.then(response => {
				setProductsList(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

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
    gap: 30px;
`;