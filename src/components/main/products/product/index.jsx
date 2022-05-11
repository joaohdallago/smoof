import styled from 'styled-components';
export default function Product({
	model,
	img,
	price
}) {
	return (
		<Container>
			<h2>{model}</h2>
			<img src={img} alt={model} />
			<h2>R$ {price}</h2>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >img {
        width: 100%;
    }
`;