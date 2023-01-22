import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Search from "../components/search/Search";
import Authentication from "./authentication/Authentication";
import NotFound from "./NotFound";
/* Quiz paths */
import QuizList from "./quizzes/Home/QuizList";
import QuizView from "./quizzes/Sets/QuizView";
import Take from "./quizzes/Questions/Take";

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
      {/* quiz paths */}
      <Route exact={true} path="/quizzes/">
        <QuizList/>
      </Route>
      <Route exact={true} path="/quizzes/:quizId"> {/* pathing OK */ }
        <QuizView/>
      </Route>
      <Route path="/take/:quizId">
        <Take/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
