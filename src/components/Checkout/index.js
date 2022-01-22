import styled from 'styled-components'
import TargetCheck from '../TargetCheck'
import { Link } from 'react-router-dom'

function Checkout(props) {
	let tarjetasCheck = allComponents
		.filter(item => {
			return props.productos[item.nameU] !== 0
		})
		.map(item => {
			return (
				<TargetCheck
					key={item.nameU}
					nameU={item.nameU}
					image={item.image}
					cantiT={props.productos[item.nameU]}
					sumar={props.sumar}
					restar={props.restar}
					price={item.price}
				/>
			)
		})

	return (
		<>
			<CheckoutWrapper valor={props.valor}>
				<div className='check-header-container'>
					<header>
						<h3>CART</h3>
						<svg
							className='cross-check'
							onClick={() => props.cambiar()}
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'>
							<path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
						</svg>
					</header>
					<h6> Subtotal: ${Math.floor(props.totalP * 100) / 100}</h6>
				</div>

				{tarjetasCheck.length === 0 ? (
					<section>
						<div className='check-message-empty'>
							<h4>Sorry!</h4>
							<h5>There is no item in the cart. </h5>
						</div>
					</section>
				) : (
					<section className='check-overflowy'>{tarjetasCheck}</section>
				)}

				{tarjetasCheck.length > 0 ? (
					<div className='check-btn-center'>
						<Link to='/' className='check-btn' onClick={() => props.resetear()}>
							CHECKOUT
						</Link>
					</div>
				) : (
					''
				)}
			</CheckoutWrapper>
		</>
	)
}

const CheckoutWrapper = styled.aside`
	display: flex;
	min-height: calc(100vh);
	height: 100%;
	width: 31.25rem;
	position: fixed;
	top: 0;
	right: ${props => (props.valor ? '0%' : '-100%')};
	z-index: 4;
	box-shadow: -4px 0px 5px -5px rgba(0, 0, 0, 1);
	opacity: ${props => (props.valor ? '1' : '0')};
	flex-direction: column;
	background-color: ${({ theme }) => theme.cart.checkoutBg};
	transition: background-color 0.5s ease-in-out, opacity 0.75s ease-in,
		right 0.75s ease-in;

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		padding: 1rem 0;
		width: 100%;
		max-height: calc(100vh - 12.519rem);
		margin-bottom: 0.5rem;
	}

	div {
		display: flex;
	}

	.check-header-container {
		background-color: #e2e8f0;
		min-width: 13.75rem;
	}

	.check-overflowy {
		overflow-y: visible;
		overflow-x: hidden;
	}

	.check-header-container {
		display: flex;
		flex-direction: column;
		background-color: #e2e8f0;
		min-width: 13.75rem;
	}

	.check-header-container,
	.check-message-empty {
		flex-direction: column;
	}

	header {
		font-size: 1.2rem;
		margin: 0;
		padding: 0.62rem 1rem;
		background-color: ${({ theme }) => theme.cart.cartBg};
		transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
		text-align: center;
		color: ${({ theme }) => theme.cart.textColors};
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.check-header-container {
		display: flex;
		flex-direction: column;
		background-color: #e2e8f0;
		min-width: 13.75rem;
	}

	.cross-check {
		position: absolute;
		right: 1rem;
		cursor: pointer;
		fill: ${({ theme }) => theme.cart.textColors};
		transition: fill 0.5s ease-in-out;
	}

	h4 {
		font-size: 7rem;
		text-align: center;
		color: ${({ theme }) => theme.cart.textColors};
		transition: color 0.5s ease-in-out;
	}

	h5 {
		text-align: center;
		color: ${({ theme }) => theme.cart.textColors};
		transition: color 0.5s ease-in-out;
	}

	h6 {
		padding: 0.6rem 0;
		color: ${({ theme }) => theme.cart.textColors};
		text-align: center;
		font-size: 1rem;
		background-color: ${({ theme }) => theme.cart.subtotalBg};
		transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
		width: 100%;
	}

	.check-btn-center {
		justify-content: center;
	}

	.check-btn {
		border-radius: 1.875rem;
		border: none;
		width: 9rem;
		height: 3rem;
		font-size: 0.938rem;
		font-weight: 800;
		background-color: #f0b429;
		color: #000;
		transition: background-color 0.25s ease-in, box-shadow 0.25s ease-in;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 1.3rem;
	}

	.check-btn:hover {
		background-color: #de911d;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
			0px 1px 2px 0px rgba(0, 0, 0, 0.06);
	}

	@media (max-width: 830px) {
		display: block;
		min-height: 0;
		width: 20rem;

		header {
			width: 100%;
			text-align: center;
			padding: 0.64rem 0;
			font-size: 1rem;
		}
		.check-header-container {
			justify-content: center;
			align-items: center;
			margin-bottom: 1rem;
		}
		section {
			max-height: calc(100vh - 12.519rem);
			margin-bottom: 0.25rem;
		}

		svg {
			right: 1rem;
		}
		.check-btn {
			width: 6.25rem;
			height: 2.1875rem;
			font-size: 0.75rem;
			display: flex;
			position: absolute;
			bottom: 0.8rem;
		}
		h4 {
			font-size: 4rem;
		}
		h5 {
			font-size: 1rem;
			text-align: center;
		}
		h6 {
			font-size: 1rem;
			padding: 0.62rem;
		}
	}
`

export default Checkout

let allComponents = [
	{
		nameU: 'AMD Ryzen 5 3600',
		price: 299.33,
		category: 'processor',
		image:
			'https://www.amd.com/system/files/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png',
	},
	{
		nameU: 'GIGABYTE RX 570',
		price: 90,
		category: 'video_card',
		image:
			'https://static.gigabyte.com/StaticFile/Image/Global/d7cd9f37fc1eaa31ba619f1254fbbd78/Product/19596/png/1000',
	},
	{
		nameU: 'Intel I5 10400F',
		price: 150,
		category: 'processor',
		image:
			'https://www.venex.com.ar/products_images/1617202625_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png',
	},
	{
		nameU: 'MSI Fake City',
		price: 175,
		category: 'motherboards',
		image:
			'https://i2.wp.com/www.pngmart.com/files/7/Computer-Motherboard-PNG-HD.png?resize=600%2C9999&ssl=1',
	},
	{
		nameU: 'GeForce GTX 1650',
		price: 200,
		category: 'video_card',
		image:
			'https://www.pny.com/productimages/195603E1-C0F3-42D8-BF4D-D71770CBC53B/images/XLR8-Graphics-Cards-GTX-1650-OC-ra-2-.png',
	},
	{
		nameU: 'GTX 1060',
		price: 70,
		category: 'video_card',
		image:
			'https://www.asus.com/us/site/graphics-cards/gpu-tweak-ii/img/download-module/graphics-card.png',
	},
	{
		nameU: 'Intel I5 8260U',
		price: 200.5,
		category: 'processor',
		image: 'https://cpufinder.com/images/intel-core-i5-8260u.jpg',
	},
	{
		nameU: 'ASUS DUAL RX580',
		price: 134.99,
		category: 'video_card',
		image:
			'https://www.asus.com/media/global/products/42OLH5wFe3nzXV2H/P_setting_xxx_0_90_end_692.png',
	},
	{
		nameU: 'Crucial memo 8GB',
		price: 99.99,
		category: 'memory',
		image:
			'https://topesdegama.com/app/uploads-topesdegama.com/2019/02/crucial-3.png',
	},
	{
		nameU: 'ROG STRIX Z490',
		price: 49.99,
		category: 'motherboards',
		image:
			'https://dlcdnimgs.asus.com/websites/global/products/sqlhk1j3w9jgpcci/img/z490/kv/hero.png',
	},
	{
		nameU: 'GIGABYTE Z77X',
		price: 299.99,
		category: 'motherboards',
		image: 'https://hardzone.es/app/uploads-hardzone.es/2012/08/Z77X-UP7_3.png',
	},
	{
		nameU: 'GTX 1070',
		price: 149.99,
		category: 'video_card',
		image:
			'https://images.evga.com/products/gallery/png/08G-P4-6170-RX_LG_1.png',
	},
	{
		nameU: 'AMD Ryzen 3 1200',
		price: 259.99,
		category: 'processor',
		image:
			'https://www.amd.com/system/files/24301-ryzen-3-pib-right-facing-1260x709_1.png',
	},
]
