import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
        </Switch>
    );
};

export default Main;
