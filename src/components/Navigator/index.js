import { Link } from 'react-router-dom'
import './nav.css'

function Navigator(props) {
	return (
		<nav>
			<Link to='/shopping_cart/' className='titNav'>
				Gaming Store
			</Link>
			<div className='moverNav'>
				<ul className='navAll'>
					<li className='liName'>
						<Link to='/shop/all'>
							<div className='linkH'>SHOP</div>
						</Link>
					</li>

					<li className='liName che'>
						<Link to='/checkout'>
							<div className='linkH'>
								<svg
									width='25'
									height='25'
									className='svgL'
									viewBox='0 0 36 36'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M25.815 13.5L19.245 3.66C18.96 3.24 18.48 3.03 18 3.03C17.52 3.03 17.04 3.24 16.755 3.675L10.185 13.5H3C2.175 13.5 1.5 14.175 1.5 15C1.5 15.135 1.515 15.27 1.56 15.405L5.37 29.31C5.715 30.57 6.87 31.5 8.25 31.5H27.75C29.13 31.5 30.285 30.57 30.645 29.31L34.455 15.405L34.5 15C34.5 14.175 33.825 13.5 33 13.5H25.815ZM13.5 13.5L18 6.9L22.5 13.5H13.5ZM18 25.5C16.35 25.5 15 24.15 15 22.5C15 20.85 16.35 19.5 18 19.5C19.65 19.5 21 20.85 21 22.5C21 24.15 19.65 25.5 18 25.5Z'
										fill='#F0F4F8'
									/>
								</svg>
							</div>
						</Link>
						<div className='cantidad'>
							<p>{props.cant}</p>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigator
