import './goUp.css'

function GoUp() {
	return (
		<>
			<span
				className='goUpB'
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}>
				<svg
					className='flechaL'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M24 12l-10-10v7h-14v6h14v7z' />
				</svg>
			</span>
		</>
	)
}

export default GoUp
