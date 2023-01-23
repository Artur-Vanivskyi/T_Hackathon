import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
//import About from "../components/about/About";
import Home from "../components/home/Home";
//import Search from "../components/search/Search";
import Mentorship from "../components/mentorship/Mentorship";
import Authentication from "./authentication/Authentication";
import Jobs from "../components/jobs/Jobs";
import NotFound from "./NotFound";
import List from "../components/jobs/list/List";
import Search from "../components/jobs/search/Search";
import Homee from "../homee/Homee";
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
        <Homee />
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
      {/* quiz paths */}
      <Route exact={true} path="/quizzes/">
        <QuizList/>
      </Route>
      <Route path="/quizzes/:quizId"> {/* pathing OK */ }
        <QuizView/>
      </Route>
      <Route exact={true} path="/onboarding" /* "/take/:quizId" */>
        <Take/>
      </Route>
      <Route path="/onboarding/:questionId" /* "/take/:quizId" */>
        <Take/>
      </Route>
      {/* end quiz paths */}
      <Route path="/opp">
        <List />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
