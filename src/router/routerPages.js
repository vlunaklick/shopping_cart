import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigator from "../components/Navigator";
import React, { useEffect } from "react";
import { useState } from "react";
import HomeShow from "../pages/Main";
import Error404 from "../pages/404 Error";
import ShopMain from "../pages/Shop";
import Checkout from "../pages/Checkout";

export default function RouterPages(){
    let [cantP,changeCant] = useState(0);

    let [compP,changeComp] = useState(objCompra);

    let [totalP,changeTot] = useState(0);


    const addOneP =  (id) => {
        changeComp(prevState => {
            return { ...prevState, [id]: prevState[id] + 1 };
        })
    }
    
    const resOneP =  (id) => {
        changeComp(prevState => {
            if (prevState[id] === 0) {
                return { ...prevState };
            } else {
                return { ...prevState, [id]: prevState[id] - 1 };
            }
        });
    }

    useEffect(()=>{
        changeCant(prevState => {
            return Object.values(compP).reduce((t, n) => t + n);
        })
        changeTot(() => {
            return Object.entries(compP).reduce((final, item) => {
                return final + (objCompraPrecios[item[0]] * item[1]);
            }, 0);
        })
    },[compP]);


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
                    <Checkout productos={compP} totalP={totalP} sumar={addOneP} restar={resOneP} />
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

let objCompraPrecios = {
    "AMD Ryzen 3 1200": 259.99,
    "GTX 1070": 149.99,
    "GIGABYTE Z77X": 299.99,
    "ROG STRIX Z490": 49.99,
    "Crucial memo 8GB": 99.99,
    "ASUS DUAL RX580": 134.99,
    "Intel I5 8260U": 200.5,
    "GTX 1060": 70,
    "GeForce GTX 1650": 200,
    "MSI Fake City": 175,
    "Intel I5 10400F": 150,
    "GIGABYTE RX 570": 90,
    "AMD Ryzen 5 3600": 299.00,
}