import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home/Home.js";
import Spending from "./pages/spending/Spending.js";

const Routes = () => (

    <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spending" component={Spending} />
        </Switch>

    </BrowserRouter>

);

export default Routes;