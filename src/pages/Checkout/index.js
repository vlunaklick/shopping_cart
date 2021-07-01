import './styles.css';
import TargetCheck from '../../components/TargetCheck'
import { useState } from 'react';


export default function Checkout(props){

    let [totalP,changeTot] = useState(0)

    return( 
        <>
            <main className="mainShop">
                <div className="total">
                    <div className="izqPanel">
                        <h4 className="titNavIzq">TOTAL</h4>
                        <h2 className="totS">${totalP}</h2>
                    </div>

                    <div className="derPanel">
                        <TargetCheck />
                    </div>
                </div>
            </main>
        </>
    ) 
}
