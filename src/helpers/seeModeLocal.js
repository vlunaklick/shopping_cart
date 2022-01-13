export const seeModeLocal = () => {
	return localStorage.getItem('mode') !== null
		? localStorage.getItem('mode')
		: 'light'
}
