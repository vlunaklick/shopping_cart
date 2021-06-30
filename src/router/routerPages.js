import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigator from "../components/Navigator";
import React from "react";
import HomeShow from "../pages/Main";
import Error404 from "../pages/404 Error";
import ShopMain from "../pages/Shop";

export default function RouterPages(){
    return(

        <Router>
            <Navigator />

            <Switch>

                <Route exact path ="/">
                    <HomeShow />
                </Route>

                <Route exact path="/shop">
                    <ShopMain />
                </Route>

                <Route exact path="/checkout">
                    <h1>Checkout</h1>
                </Route>

                <Route path="*">
                    <Error404 />
                </Route>
                
            </Switch>

        </Router>
    )
}
