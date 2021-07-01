import './HomeShow.css'
import { Link } from 'react-router-dom'

export default function HomeShow() {
    return (
        <>
            <main className="mainHo">
                <div className="containerHome">
                    <div className="imgHome teH">
                        <div>
                            <div className="textHome">
                                <h3 className="h3H">
                                    Make your dream computer come true.
                                </h3>
                                <h3 className="h3H">Be a real gamer.</h3>
                            </div>
                            <Link to="/shop" className="bShop">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                    <div className="imgHome imgP">
                        <img
                            className="imgSrc"
                            src="https://i.imgur.com/msGgRDM.png"
                            alt=""
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
