import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
//import About from "../components/about/About";
import Home from "../components/home/Home";
import Onboarding from "../components/onboarding/Onboarding";
//import Search from "../components/search/Search";
import Mentorship from "../components/mentorship/Mentorship";
import Authentication from "./authentication/Authentication";
import Jobs from "../components/jobs/Jobs";
import NotFound from "./NotFound";
import List from "../components/jobs/list/List";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/onboarding">
        <Onboarding />
      </Route>
      <Route path="/mentorship">
        <Mentorship />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/auth">
        <Authentication />
      </Route>
      <Route path="/opp">
        <List />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
