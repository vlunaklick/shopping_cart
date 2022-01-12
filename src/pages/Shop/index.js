import { NavLink } from 'react-router-dom'
import Target from '../../components/Target'
import { useEffect } from 'react'
import GoUp from '../../components/GoUp'
import useScroll from '../../hooks/useScroll'
import styled from 'styled-components'

function ShopMainS({
	muestra,
	sumar,
	restar,
	clickear,
	setClickeado,
	clickeado,
	className,
}) {
	let [showUp, isScrolled] = useScroll()

	useEffect(() => {
		if (showUp) setClickeado(false)
	}, [showUp])

	window.addEventListener('scroll', isScrolled)

	let tarjetas = allComponents
		.filter(item => {
			return item.category === muestra
		})
		.map(function (a) {
			return (
				<Target
					key={a.nameU}
					image={a.image}
					nameU={a.nameU}
					price={a.price}
					sumar={sumar}
					restar={restar}
				/>
			)
		})

	if (muestra === 'all') {
		tarjetas = allComponents.map(function (a) {
			return (
				<Target
					key={a.nameU}
					image={a.image}
					nameU={a.nameU}
					price={a.price}
					sumar={sumar}
					restar={restar}
				/>
			)
		})
	}

	return (
		<section className={className}>
			<div className='main-shop-navigator'>
				<header>
					<h4>PRODUCTS</h4>
					<div
						className='main-shop-navigator-products-menu-btn'
						onClick={() => clickear()}>
						<svg viewBox='0 0 100 80' width='25' height='25'>
							<rect width='100' height='20'></rect>
							<rect y='30' width='100' height='20'></rect>
							<rect y='60' width='100' height='20'></rect>
						</svg>
					</div>
				</header>
				<ul>
					<li>
						<NavLink
							className='main-shop-navigator-list-option-hiperlink'
							to='/shop/all'
							onClick={() => clickear()}
							activeClassName='active'>
							All
						</NavLink>
					</li>
					<li>
						<NavLink
							className='main-shop-navigator-list-option-hiperlink'
							to='/shop/memory'
							onClick={() => clickear()}
							activeClassName='active'>
							Memory
						</NavLink>
					</li>
					<li>
						<NavLink
							className='main-shop-navigator-list-option-hiperlink'
							to='/shop/motherboards'
							onClick={() => clickear()}
							activeClassName='active'>
							Motherboards
						</NavLink>
					</li>
					<li>
						<NavLink
							className='main-shop-navigator-list-option-hiperlink'
							to='/shop/video_card'
							onClick={() => clickear()}
							activeClassName='active'>
							Video Card
						</NavLink>
					</li>
					<li className='main-shop-navigator-list-option'>
						<NavLink
							className='main-shop-navigator-list-option-hiperlink'
							to='/shop/processor'
							onClick={() => clickear()}
							activeClassName='active'>
							Processors
						</NavLink>
					</li>
				</ul>
			</div>

			<section className='section-shop'>{tarjetas}</section>
			<GoUp show={showUp} />
		</section>
	)
}

const ShopMain = styled(ShopMainS)`
	min-height: calc(100vh - 3.3625rem);
	height: 100%;
	background-color: ${({ theme }) => theme.shop.bgColor};
	transition: background-color 0.5s ease-in;

	.main-shop-navigator {
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.shop.headerNormal};
		transition: background-color 0.5s ease-in;
		min-width: 13.75rem;
	}

	.section-shop {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		padding: 1rem 0;
		width: 100%;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 0;
	}

	li {
		text-align: center;
		display: flex;
		line-height: 2rem;
		cursor: pointer;
		list-style: none;
		justify-content: center;
	}

	.main-shop-navigator-list-option-hiperlink {
		color: ${({ theme }) => theme.shop.hiperColor};
		padding: 0.4rem 0.5rem;
		width: 15ch;
		transition: color 0.5s ease-in;
	}

	.active {
		color: ${({ theme }) => theme.shop.hiperColor};
		background-color: ${({ theme }) => theme.shop.bgActivHiper};
		font-weight: 900;
		transition: background-color 0.5s ease-in, color 0.5s ease-in;
	}

	h4 {
		color: ${({ theme }) => theme.shop.hiperColor};
		font-size: 1.2rem;
		transition: color 0.5s ease-in;
	}

	.main-shop-navigator-list-option-hiperlink:hover {
		background-color: ${({ theme }) => theme.shop.bgActivHiper};
		transition: background-color 0.5s ease-in;
	}

	header {
		display: none;
		font-size: 1.875rem;
		padding: 1rem 2rem;
		background-color: ${({ theme }) => theme.shop.headerBg};
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		transition: background-color 0.5s ease-in;
	}

	.main-shop-navigator-products-menu-btn {
		display: none;
		fill: ${({ theme }) => theme.shop.navColor};
		transition: fill-color 0.5s ease-in;
	}

	@media (max-width: 949px) {
		display: block;
		min-height: calc(100vh - 3.0625rem);

		ul {
			position: absolute;
			top: ${({ clickeado }) => (clickeado ? '5.638rem' : '-100%')};
			transition: all 0.75s ease;
			left: 0;
			opacity: 1;
			z-index: 1;
			flex-direction: column;
			gap: 0;
		}

		.main-shop-navigator-products-menu-btn {
			display: flex;
			cursor: pointer;
			position: absolute;
			right: 0;
			transform: translate(-60%);
		}
		header {
			width: 100%;
			padding: 0.6rem 0;
			z-index: 2;
			display: flex;
		}
		.main-shop-navigator {
			justify-content: center;
			align-items: center;
		}
		.main-shop-navigator-list-option {
			text-align: center;
			width: 100%;
		}

		.main-shop-navigator-list-option-hiperlink {
			background-color: ${({ theme }) => theme.shop.headerNormal};
			padding: 0.5rem 0.25rem;
			width: 100%;
			transition: background-color 0.5s ease-in;
		}
		.active {
			background-color: ${({ theme }) => theme.shop.bgActivHiper};
			transition: background-color 0.5s ease-in;
		}
		.main-shop-navigator-list-option-hiperlink:hover {
			background-color: ${({ theme }) => theme.shop.bgActivHiper};
			transition: background-color 0.5s ease-in;
		}
		h4 {
			font-size: 1rem;
		}
	}
`

export default ShopMain

let allComponents = [
	{
		nameU: 'AMD Ryzen 5 3600',
		price: 299.0,
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
