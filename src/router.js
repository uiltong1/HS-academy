import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Componentes
import Menu from "./components/Menu";
import Home from "./components/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;