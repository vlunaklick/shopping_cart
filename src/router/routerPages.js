import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigator from '../components/Navigator'
import React, { useEffect } from 'react'
import { useState } from 'react'
import HomeShow from '../pages/Main'
import Error404 from '../pages/404 Error'
import ShopMain from '../pages/Shop'
import Checkout from '../components/Checkout'
import useItems from '../hooks/useItems'
import useCarro from '../hooks/useCarro'

export default function RouterPages() {
	let [cantP, changeCant] = useState(0)

	let [totalP, changeTot] = useState(0)

	let [carro, cambiarCarro, cerraCarro] = useCarro()

	let [compP, addOneP, resetOneP, resOneP] = useItems()

	let [clickeado, setClickeado] = useState(false)

	const clickear = () => {
		setClickeado(!clickeado)
		cerraCarro()
	}

	const resetAll = () => {
		resetOneP()
		changeTot(0)
		changeCant(0)
		cambiarCarro()
	}

	useEffect(() => {
		changeCant(prevState => {
			return Object.values(compP).reduce((t, n) => t + n)
		})
		changeTot(() => {
			return Object.entries(compP).reduce((final, item) => {
				return final + objCompraPrecios[item[0]] * item[1]
			}, 0)
		})
	}, [compP])

	return (
		<Router>
			<Navigator cant={cantP} carrito={cambiarCarro} cerrar={cerraCarro} />

			<Switch>
				<Route exact path='/shopping_cart/'>
					<HomeShow cerrar={cerraCarro} />
				</Route>

				<Route path='/shop'>
					<Switch>
						<Route exact path='/shop/all'>
							<ShopMain
								muestra='all'
								sumar={addOneP}
								restar={resOneP}
								clickear={clickear}
								setClickeado={setClickeado}
								clickeado={clickeado}
							/>
						</Route>
						<Route exact path='/shop/motherboards'>
							<ShopMain
								muestra='motherboards'
								sumar={addOneP}
								restar={resOneP}
								clickear={clickear}
								setClickeado={setClickeado}
								clickeado={clickeado}
							/>
						</Route>
						<Route exact path='/shop/video_card'>
							<ShopMain
								muestra='video_card'
								sumar={addOneP}
								restar={resOneP}
								clickear={clickear}
								setClickeado={setClickeado}
								clickeado={clickeado}
							/>
						</Route>
						<Route exact path='/shop/processor'>
							<ShopMain
								muestra='processor'
								sumar={addOneP}
								restar={resOneP}
								clickear={clickear}
								setClickeado={setClickeado}
								clickeado={clickeado}
							/>
						</Route>
						<Route exact path='/shop/memory'>
							<ShopMain
								muestra='memory'
								sumar={addOneP}
								restar={resOneP}
								clickear={clickear}
								setClickeado={setClickeado}
								clickeado={clickeado}
							/>
						</Route>
						<Route path='*'>
							<Error404 cerrar={cerraCarro} />
						</Route>
					</Switch>
				</Route>

				<Route path='*'>
					<Error404 cerrar={cerraCarro} />
				</Route>
			</Switch>
			<Checkout
				productos={compP}
				totalP={totalP}
				sumar={addOneP}
				restar={resOneP}
				resetear={resetAll}
				valor={carro}
				cambiar={cerraCarro}
			/>
		</Router>
	)
}

let objCompraPrecios = {
	'AMD Ryzen 3 1200': 259.99,
	'GTX 1070': 149.99,
	'GIGABYTE Z77X': 299.99,
	'ROG STRIX Z490': 49.99,
	'Crucial memo 8GB': 99.99,
	'ASUS DUAL RX580': 134.99,
	'Intel I5 8260U': 200.5,
	'GTX 1060': 70,
	'GeForce GTX 1650': 200,
	'MSI Fake City': 175,
	'Intel I5 10400F': 150,
	'GIGABYTE RX 570': 90,
	'AMD Ryzen 5 3600': 299.0,
}
