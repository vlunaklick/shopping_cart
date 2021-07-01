import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigator from "../components/Navigator";
import React from "react";
import { useState } from "react";
import HomeShow from "../pages/Main";
import Error404 from "../pages/404 Error";
import ShopMain from "../pages/Shop";
import Checkout from "../pages/Checkout";

export default function RouterPages(){
    let [cantP,changeCant] = useState(0);

    let [compP,changeComp] = useState(objCompra);


    const addOneP = (id) => {
        changeComp(prevState => {
            return { ...prevState, [id]: prevState[id] + 1 };
        })
        changeCant(() => {
            return Object.values(compP).reduce((t, n) => t + n,1);
        })
    }
    
    const resOneP = async (id) => {
        changeComp(prevState => {
            if (prevState[id] === 0) {
                return { ...prevState };
            } else {
                return { ...prevState, [id]: prevState[id] - 1 };
            }
        });
        changeCant(prevState => {
            if (prevState === 0) {
                return prevState ;
            } else {
                return Object.values(compP).reduce((t, n) => t + n, -1);
            }
            
        });
    }


    return(

        <Router>
            <Navigator cant={cantP} />

            <Switch>

                <Route exact path ="/">
                    <HomeShow />
                </Route>

                <Route exact path="/shop">
                    <ShopMain sumar={addOneP} restar={resOneP}/>
                </Route>

                <Route exact path="/checkout">
                    <Checkout productos={compP} sumar={addOneP} restar={resOneP} />
                </Route>

                <Route path="*">
                    <Error404 />
                </Route>
                
            </Switch>

        </Router>
    )
}



let objCompra = {
    "AMD Ryzen 3 1200": 0,
    "GTX 1070": 0,
    "GIGABYTE Z77X": 0,
    "ROG STRIX Z490": 0,
    "Crucial memo 8GB": 0,
    "ASUS DUAL RX580": 0,
    "Intel I5 8260U": 0,
    "GTX 1060": 0,
    "GeForce GTX 1650": 0,
    "MSI Fake City": 0,
    "Intel I5 10400F": 0,
    "GIGABYTE RX 570": 0,
    "AMD Ryzen 5 3600": 0,
}