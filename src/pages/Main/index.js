import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imageLigth from '../../images/Vector.svg'

function HomeShowS(props) {
	return (
		<>
			<main className={props.className}>
				<section className='main-home-panel-left'>
					<div>
						<div className='main-home-panel-left-text'>
							<h3>Make your dream computer come true.</h3>
							<h3>Be a real gamer.</h3>
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
				<section className='main-home-panel-rigth-img'>
					<img src='https://i.imgur.com/msGgRDM.png' alt='' />
				</section>
			</main>
		</>
	)
}

const HomeShow = styled(HomeShowS)`
	min-height: calc(100vh - 3.363rem);
	background-image: url(${imageLigth});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;

	h3 {
		font-weight: 100;
		color: #fff;
		font-size: 2.2rem;
	}

	.main-home-panel-left-btn {
		border-radius: 1.875rem;
		border: none;
		width: 9rem;
		height: 3rem;
		font-size: 0.938rem;
		font-weight: 800;
		background-color: #e2e8f0;
		color: #0f172a;
		transition: 0.25s;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.main-home-panel-left-btn:hover {
		background-color: #cbd5e1;
		box-shadow: 0 0 5px #a6b0bd;
	}

	section {
		min-height: calc(100vh - 5.75rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 37.172rem;
	}

	img {
		width: 34.375rem;
		transition: 1s;
		position: fixed;
	}

	img:hover {
		width: 35.938rem;
	}

	@media (max-width: 1025px) {
		min-height: 0;
		width: 100%;

		.main-home-panel-left {
			z-index: 1;
		}
		h3 {
			background-color: #c4c4c486;
			padding: 0.5rem;
		}
		.main-home-panel-rigth-img {
			position: absolute;
		}
		.main-home-panel {
			width: 100%;
		}
		img {
			position: absolute;
		}
		section {
			width: 100%;
		}
	}

	@media (max-width: 1270px) {
		h3 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 750px) {
		min-height: calc(100vh - 3.063rem);
		.main-home-panel-left {
			z-index: 1;
		}
		.main-home-panel-left-text {
			padding: 0.5rem;
		}
		.main-home-panel-rigth-img {
			position: absolute;
		}
		img {
			width: 18.75rem;
		}
		h3 {
			font-size: 1.25rem;
		}
	}
`

export default HomeShow
