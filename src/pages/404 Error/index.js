import styled from 'styled-components'

function Error404S({ className }) {
	return (
		<>
			<main className={className}>
				<h1>Error 404</h1>
				<p>This page has not been found</p>
			</main>
		</>
	)
}

const Error404 = styled(Error404S)`
	background-color: ${({theme})=> theme.shop.bgColor};
	min-height: calc(100vh - 5.813rem);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: background-color .5s ease-in;

	h1,
	p {
		color: ${({theme})=> theme.shop.navColor};
		transition: color .5s ease-in;
	}

	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 2rem;
		text-align: center;
	}

	@media (max-width: 949px){
		min-height: calc(100vh - 3.0625rem);
	}
`

export default Error404
