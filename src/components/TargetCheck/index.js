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
	border: ${({ theme }) => `2px solid ${theme.target.borderColor}`};
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
		0px 1px 2px 0px rgba(0, 0, 0, 0.06);
	transition: border 0.5s ease-in;
	flex-direction: column;
	border-radius: 0.3rem;

	.target-top-part {
		width: 17.5rem;
		height: 17.5rem;
		background-color: ${({ theme }) => theme.target.targetTopBg};
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.5s ease-in;
		border-top-left-radius: 0.15rem;
		border-top-right-radius: 0.15rem;
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
		color: ${({ theme }) => theme.target.colorP};
		transition: color 0.5s ease-in;
	}
	p {
		margin-left: 0.5rem;
		font-size: 0.6rem;
		color: ${({ theme }) => theme.target.colorP};
		transition: color 0.5s ease-in;
	}
	.target-bottom-check-part {
		width: 17.5rem;
		height: 4.25rem;
		background-color: ${({ theme }) => theme.target.targetBottomBg};
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		transition: background-color 0.5s ease-in;
	}
	.target-bottom-check-part-price {
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${({ theme }) => theme.target.colorP};
		transition: color 0.5s ease-in;
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
		background-color: ${({ theme }) => theme.target.targetBottomButton};
		cursor: pointer;
		transition: background-color 0.5s ease-in;
	}
	.target-bottom-part-btn-rigth {
		width: 2.875rem;
		height: 1.813rem;
		border-bottom-right-radius: 0.313rem;
		border-top-right-radius: 0.313rem;
		background-color: ${({ theme }) => theme.target.targetBottomButton};
		cursor: pointer;
		transition: background-color 0.5s ease-in;
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
		background-color: ${({ theme }) => theme.target.targetBootomButtonHover};
		transition: background-color 0.5s ease-in;
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
