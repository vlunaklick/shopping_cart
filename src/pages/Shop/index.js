import { NavLink } from 'react-router-dom'
import Target from '../../components/Target'
import { useEffect } from 'react'
import GoUp from '../../components/GoUp'
import useScroll from '../../hooks/useScroll'
import styled from 'styled-components'
import { allComponents } from '../../allComponents'

function ShopMain({
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
		<ShopMainWrapper clickeado={clickeado}>
			<div className='main-shop-navigator'>
				<header>
					<h4>PRODUCTS</h4>
					<div
						className='main-shop-navigator-products-menu-btn'
						onClick={() => clickear()}>
						<svg viewBox='0 0 100 80' width='25' height='25' className='svgNav'>
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
		</ShopMainWrapper>
	)
}

const ShopMainWrapper = styled.section`
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
		.svgNav {
			transform: ${props =>
				props.clickeado ? 'rotate(-90deg)' : 'rotate(0deg)'};
			transition: transform 0.3s ease-in;
		}

		header {
			width: 100%;
			padding: 0.6rem 0;
			z-index: 2;
			display: flex;
			box-shadow: ${props =>
				props.clickeado ? '' : '0 1px 2px 0 rgb(0 0 0 / 0.05)'};
			transition: background-color 0.5s ease-in, box-shadow 0.5s ease-in;
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

