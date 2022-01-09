import { useState } from 'react'

const useItems = () => {
	let [compP, changeComp] = useState(objCompra)

	const addOneP = id => {
		changeComp(prevState => {
			return { ...prevState, [id]: prevState[id] + 1 }
		})
	}

	const resOneP = id => {
		changeComp(prevState => {
			if (prevState[id] === 0) {
				return { ...prevState }
			} else {
				return { ...prevState, [id]: prevState[id] - 1 }
			}
		})
	}

	const resetOneP = () => {
		changeComp(objCompra)
	}

	return [compP, addOneP, resetOneP, resOneP]
}

let objCompra = {
	'AMD Ryzen 3 1200': 0,
	'GTX 1070': 0,
	'GIGABYTE Z77X': 0,
	'ROG STRIX Z490': 0,
	'Crucial memo 8GB': 0,
	'ASUS DUAL RX580': 0,
	'Intel I5 8260U': 0,
	'GTX 1060': 0,
	'GeForce GTX 1650': 0,
	'MSI Fake City': 0,
	'Intel I5 10400F': 0,
	'GIGABYTE RX 570': 0,
	'AMD Ryzen 5 3600': 0,
}

export default useItems
