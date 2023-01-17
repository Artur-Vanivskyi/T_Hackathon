import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Search from "../components/search/Search";
import Authentication from "./authentication/Authentication";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route exact path="/auth">
        <Authentication />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
