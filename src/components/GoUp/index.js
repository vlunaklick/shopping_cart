import styled from 'styled-components'

function GoUp(props) {
	return (
		<>
			<GoUpStyled
				show={props.show}
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'>
					<path d='M24 12l-10-10v7h-14v6h14v7z' />
				</svg>
			</GoUpStyled>
		</>
	)
}

const GoUpStyled = styled.span`
	background-color: ${({ theme }) => theme.goUp.bgColor};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	position: fixed;
	padding: 0.5rem;
	bottom: ${props => (props.show ? '1rem' : '-10%')};
	right: 0;
	cursor: pointer;
	-webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 2px;
	-moz-box-shadow: rgba(0, 0, 0, 0.8) 0 0 2px;
	box-shadow: rgba(0, 0, 0, 0.8) 0 0 2px;
	transition: bottom 0.5s ease-in, background-color 0.5s ease-in;
	transform: translate(-50%);

	svg {
		transform: rotate(-90deg);
		fill: ${({ theme }) => theme.goUp.textColor};
		transition: fill 0.5s ease-in;
	}
`

export default GoUp
