import { useState } from 'react'

const useScrollGoUp = () => {
	let [showUp, changeShowUp] = useState(false)

	const isScrolledGoUp = () => {
		if (window.scrollY > 60) {
			changeShowUp(true)
		} else {
			changeShowUp(false)
		}
	}

	return [showUp, isScrolledGoUp]
}

export default useScrollGoUp
