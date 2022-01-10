import { useState } from 'react'

const useScroll = () => {
	let [showUp, changeShowUp] = useState(false)

	const isScrolled = () => {
		if (window.scrollY > 60) {
			changeShowUp(true)
		} else {
			changeShowUp(false)
		}
	}

	return [showUp, isScrolled]
}

export default useScroll
