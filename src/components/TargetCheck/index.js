import styled from 'styled-components'

function TargetCheckL(props) {
	return (
		<>
			<div className={props.className}>
				<div className='target-top-part'>
					<img src={props.image} alt='' />
				</div>
				<div className='target-bottom-check-part'>
					<div className='target-bottom-check-part-price'>
						<h5>{props.nameU}</h5>
						<p>${props.price}</p>
					</div>
					<div className='target-bottom-part-btn'>
						<div
							className='target-bottom-part-btn-left'
							onClick={() => props.restar(props.nameU)}>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='minus'
								className='svg-inline--fa fa-minus fa-w-14'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
							</svg>
						</div>

						<div className='target-bottom-check-part-quantity'>
							{props.cantiT}
						</div>

						<div
							className='target-bottom-part-btn-rigth'
							onClick={() => props.sumar(props.nameU)}>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='plus'
								className='svg-inline--fa fa-plus fa-w-14'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const TargetCheck = styled(TargetCheckL)`
	filter: drop-shadow(0px 0.4px 0.5px hsl(210deg 12% 60% / 0.34));
	flex-direction: column;

	.target-top-part {
		width: 17.5rem;
		height: 17.5rem;
		background-color: #cbd5e1;
		border-top-left-radius: 0.313rem;
		border-top-right-radius: 0.313rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 90%;
		height: 90%;
		object-fit: cover;
		transition: 0.5s;
	}
	h5 {
		font-size: 1rem;
		font-weight: 600;
		color: #f8fafc;
	}
	p {
		margin-left: 0.5rem;
		font-size: 0.6rem;
		color: #f8fafc;
	}
	.target-bottom-check-part {
		width: 17.5rem;
		height: 4.25rem;
		background-color: #94a3b8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-bottom-left-radius: 0.3125rem;
		border-bottom-right-radius: 0.3125rem;
	}
	.target-bottom-check-part-price {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1e293b;
	}
	.target-bottom-part-btn {
		display: flex;
		justify-content: center;
		width: 80%;
	}
	.target-bottom-part-btn-left {
		width: 2.875rem;
		height: 1.813rem;
		border-bottom-left-radius: 0.313rem;
		border-top-left-radius: 0.313rem;
		background-color: #f1f5f9;
		cursor: pointer;
	}
	.target-bottom-part-btn-rigth {
		width: 2.875rem;
		height: 1.813rem;
		border-bottom-right-radius: 0.313rem;
		border-top-right-radius: 0.313rem;
		background-color: #f1f5f9;
		cursor: pointer;
	}
	.target-bottom-part-btn-rigth,
	.target-bottom-part-btn-left {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s;
	}
	.target-bottom-part-btn-rigth:hover,
	.target-bottom-part-btn-left:hover {
		background-color: rgb(195, 210, 223);
	}
	.target-bottom-check-part-quantity {
		width: 2.875rem;
		height: 1.8125rem;
		background-color: black;
		color: #f8fafc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	svg {
		width: 0.875rem;
	}
`

export default TargetCheck
