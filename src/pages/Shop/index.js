import './style.css'
import { NavLink } from 'react-router-dom'
import Target from '../../components/Target'
import { useState } from 'react'
import GoUp from '../../components/GoUp'

export default function ShopMain(props) {
	let tarjetas = allComponents
		.filter(item => {
			return item.category === props.muestra
		})
		.map(function (a) {
			return (
				<Target
					key={a.nameU}
					image={a.image}
					nameU={a.nameU}
					price={a.price}
					sumar={props.sumar}
					restar={props.restar}
				/>
			)
		})

	if (props.muestra === 'all') {
		tarjetas = allComponents.map(function (a) {
			return (
				<Target
					key={a.nameU}
					image={a.image}
					nameU={a.nameU}
					price={a.price}
					sumar={props.sumar}
					restar={props.restar}
				/>
			)
		})
	}

	const [clickeado, setClickeado] = useState(false)

	const clickear = () => {
		setClickeado(!clickeado)
		props.cerrar()
	}

	return (
		<>
			<section className='main-shop'>
					<div className='main-shop-navigator'>
						<header className='main-shop-navigator-products'>
							<h4 className='main-shop-navigator-products-title'>PRODUCTS</h4>
							<div className='main-shop-navigator-products-menu-btn' onClick={() => clickear()}>
								<svg viewBox='0 0 100 80' width='25' height='25'>
									<rect width='100' height='20'></rect>
									<rect y='30' width='100' height='20'></rect>
									<rect y='60' width='100' height='20'></rect>
								</svg>
							</div>
						</header>
						<ul className={clickeado ? 'main-shop-navigator-list main-shop-navigator-list-show' : 'main-shop-navigator-list'}>
							<li className='main-shop-navigator-list-option'>
								<NavLink
									className='main-shop-navigator-list-option-hiperlink'
									to='/shop/all'
									onClick={() => clickear()}
									activeClassName='active'>
									All
								</NavLink>
							</li>
							<li className='main-shop-navigator-list-option'>
								<NavLink
									className='main-shop-navigator-list-option-hiperlink'
									to='/shop/memory'
									onClick={() => clickear()}
									activeClassName='active'>
									Memory
								</NavLink>
							</li>
							<li className='main-shop-navigator-list-option'>
								<NavLink
									className='main-shop-navigator-list-option-hiperlink'
									to='/shop/motherboards'
									onClick={() => clickear()}
									activeClassName='active'>
									Motherboards
								</NavLink>
							</li>
							<li className='main-shop-navigator-list-option'>
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

					<section className='main-shop-navigator-bottom'>{tarjetas}</section>
					{tarjetas.length > 1 ? <GoUp /> : ''}
			</section>
		</>
	)
}

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
