import { useState } from 'react'

const useCarro = () => {
	let [carro, changeCarro] = useState(false)

	const cambiarCarro = () => {
		document.body.classList.add('overflowY-desactivate')
		changeCarro(!carro)
	}

	const cerraCarro = () => {
		document.body.classList.remove('overflowY-desactivate')
		changeCarro(false)
	}

	return [carro, cambiarCarro, cerraCarro]
}

export default useCarro
