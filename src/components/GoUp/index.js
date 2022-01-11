import styled from 'styled-components'

function GoUpS(props) {
	return (
		<>
			<span
				className={props.className}
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
			</span>
		</>
	)
}

const GoUp = styled(GoUpS)`
	background-color: #475569;
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
	transition: bottom 0.5s ease-in;
	transform: translate(-50%);

	svg {
		transform: rotate(-90deg);
		fill: white;
	}
	svg:hover {
		background-color: #334155;
	}
`

export default GoUp
