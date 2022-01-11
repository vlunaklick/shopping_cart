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
	background-color: #f1f5f9;
	min-height: calc(100vh - 5.813rem);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1,
	p {
		color: #000;
	}

	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 2rem;
		text-align: center;
	}
`

export default Error404
