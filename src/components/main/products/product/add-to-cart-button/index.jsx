import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';

export default function AddToCartButton() {

	return (
		<Container>
			<MdAddShoppingCart />
		</Container>
	);
}

const Container = styled.button`
    position: absolute;
    right: 30px;
    bottom: 0px;

    :active {
        color: white;
        background-color: black;
        
        transition: 0.2s;

    }

    >svg{
        font-size: 25px;
    }
`;