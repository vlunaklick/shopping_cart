import './styles.css'
import TargetCheck from '../TargetCheck'
import { Link } from 'react-router-dom'

export default function Checkout(props) {
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
			<main className={props.valor ? 'mainCheck caTivo' : 'mainCheck'}>
				<div className='total'>
					<div className='izqPanel'>
						<div className='titNavIzq titNavC'>
							<h4 className='totalD'>CART</h4>
							<svg
								onClick={() => props.cambiar()}
								className='crossC'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'>
								<path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
							</svg>
						</div>
						<h2 className='totS'>
							{' '}
							Subtotal: ${Math.floor(props.totalP * 100) / 100}
						</h2>
					</div>

					<div className='derPanell mover'>
						{tarjetasCheck.length === 0 ? (
							<div className='messageNo'>
								<h1 className='noItem'>Sorry!</h1>
								<h1 className='noItemM'>There is no item in the cart. </h1>
							</div>
						) : (
							tarjetasCheck
						)}
					</div>
					{tarjetasCheck.length > 0 ? (
						<div className='centrarChecker'>
							<Link to='/' className='bCheck' onClick={() => props.resetear()}>
								CHECKOUT
							</Link>
						</div>
					) : (
						''
					)}
				</div>
			</main>
		</>
	)
}

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
