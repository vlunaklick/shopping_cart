import './HomeShow.css'
import { Link } from 'react-router-dom'

export default function HomeShow(props) {
	return (
		<>
			<main className='main-home'>
					<section className='main-home-panel main-home-panel-left'>
						<div>
							<div className='main-home-panel-left-text'>
								<h3 className='main-home-panel-left-text-msg'>Make your dream computer come true.</h3>
								<h3 className='main-home-panel-left-text-msg'>Be a real gamer.</h3>
							</div>
							<Link
								to='/shop/all'
								className='main-home-panel-left-btn'
								onClick={() => {
									props.cerrar()
								}}>
								SHOP NOW
							</Link>
						</div>
					</section>
					<section className='main-home-panel main-home-panel-rigth-img'>
						<img
							className='main-home-panel-rigth-img-src'
							src='https://i.imgur.com/msGgRDM.png'
							alt=''
						/>
					</section>
			</main>
		</>
	)
}
