import styled from 'styled-components';

import Header from './header';
import Navbar from './navbar';
import Products from './products';

export default function Main() {
	return (
		<Container>
			<Header />
			<Navbar />
			<Products />
		</Container>
	);
}

const Container = styled.div`
    
`;