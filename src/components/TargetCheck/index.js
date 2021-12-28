import './style.css'

export default function TargetCheck(props) {
	return (
		<>
			<div className='target'>
				<div className='target-top-part'>
					<img className='target-top-part-img' src={props.image} alt='' />
				</div>
				<div className='picBotPrice'>
					<div className='toppingP'>
						<h2 className='priceTit'>{props.nameU}</h2>
						<p className='priceP'>${props.price}</p>
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
								className='svg-inline--fa fa-minus fa-w-14 svgBtn'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
							</svg>
						</div>

						<div className='cantMid'>{props.cantiT}</div>

						<div className='target-bottom-part-btn-rigth' onClick={() => props.sumar(props.nameU)}>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='plus'
								className='svg-inline--fa fa-plus fa-w-14 svgBtn'
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
