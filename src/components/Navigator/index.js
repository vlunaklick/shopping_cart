import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'

function NavigatorL(props) {
	return (
		<>
			<nav className={props.className}>
				<Link
					id='title-link'
					to='/shopping_cart/'
					onClick={() => props.cerrar()}>
					Gaming Store
				</Link>
				<ul>
					<li>
						<input type='checkbox' name='lightdark' id='lightdark' />
						<label htmlFor='lightdark' onClick={() => props.changeTheme()}>
							<BsMoonFill className='icono' />
							<BsFillSunFill id='sun' />
							<div className='ball'></div>
						</label>
					</li>
					<li>
						<Link
							id='list-hiper-nav'
							to='/shop/all'
							onClick={() => props.cerrar()}>
							SHOP
						</Link>
					</li>

					<li id='gap-cart-nav'>
						<span
							onClick={() => {
								props.carrito()
								props.cerrar()
							}}>
							<svg
								width='25'
								height='25'
								viewBox='0 0 36 36'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M25.815 13.5L19.245 3.66C18.96 3.24 18.48 3.03 18 3.03C17.52 3.03 17.04 3.24 16.755 3.675L10.185 13.5H3C2.175 13.5 1.5 14.175 1.5 15C1.5 15.135 1.515 15.27 1.56 15.405L5.37 29.31C5.715 30.57 6.87 31.5 8.25 31.5H27.75C29.13 31.5 30.285 30.57 30.645 29.31L34.455 15.405L34.5 15C34.5 14.175 33.825 13.5 33 13.5H25.815ZM13.5 13.5L18 6.9L22.5 13.5H13.5ZM18 25.5C16.35 25.5 15 24.15 15 22.5C15 20.85 16.35 19.5 18 19.5C19.65 19.5 21 20.85 21 22.5C21 24.15 19.65 25.5 18 25.5Z'
									fill='#F0F4F8'
								/>
							</svg>
						</span>
						<p>{props.cant}</p>
					</li>
				</ul>
			</nav>
		</>
	)
}

const Navigator = styled(NavigatorL)`
	display: flex;
	padding: 0.4rem 0.72657rem;
	background-color: ${({ theme }) => theme.navigator.navBgColor};
	z-index: 3;
	position: sticky;
	top: 0;
	transition: background-color 0.5s ease-in;

	#sun {
		color: #f1c40f;
	}

	input {
		opacity: 0;
		position: absolute;
	}

	.ball {
		background-color: #fff;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		position: absolute;
		top: 2px;
		left: 2px;
		transition: transform 0.3s ease-in;
		transform: ${props =>
			props.themeOn === 'light' ? 'translate(0)' : 'translate(24px)'};
	}

	.icono,
	#sun {
		height: 16px;
		width: 16px;
	}

	label {
		width: 3.125rem;
		height: 1.625rem;
		padding: 5px;
		cursor: pointer;
		background-color: ${({ theme }) => theme.navigator.darklightColor};
		border-radius: 3.125rem;
		display: flex;
		color: #fff;
		justify-content: space-between;
		position: relative;
		transition: background-color 0.5s ease-in;
	}

	li {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0;
		justify-content: right;
		gap: 0.5rem;
		transform: translate(-10%);
	}

	span,
	#list-hiper-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 1.8rem;
		padding: 0.5rem;
		transition: 0.2s;
		font-size: 0.75rem;
		cursor: pointer;
		color: #fff;
	}

	span:hover,
	#list-hiper-nav:hover {
		background-color: #0000003d;
	}

	#gap-cart-nav {
		display: flex;
		align-items: center;
		gap: 0.1rem;
	}

	#title-link {
		font-size: 1.5rem;
		width: 100%;
		color: #fff;
		font-weight: 700;
		display: flex;
		align-items: center;
	}

	p {
		background-color: ${({ theme }) => theme.navigator.quantityColor};
		border-radius: 1.875rem;
		color: #fff;
		font-size: 0.7rem;
		padding: 0.2rem 0.4rem;
		transition: background-color 0.5s ease-in;
	}

	@media (max-width: 740px) {
		position: sticky;
		width: 100%;
		padding: 0.25rem 0;

		li {
			text-align: center;
		}

		#title-link {
			text-align: center;
			font-size: 1.2rem;
			transform: translate(10%);
		}
		#list-hiper-nav {
			font-size: 0.75rem;
		}
		label {
			width: 40px;
			height: 20.8px;
		}
		.ball {
			top: 1.4px;
			width: 17.6px;
			height: 17.6px;
			transform: ${props =>
				props.themeOn === 'light' ? 'translate(0px)' : 'translate(19px)'};
		}
		.icono,
		#sun {
			height: 12px;
			width: 12px;
		}
	}
`

export default Navigator
