import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails"
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/league/:idTeam">
          <LeagueDetails />
        </Route>

        <Router path="*">
          <NotFound />
        </Router>
      </Switch>

    </Router>

  );
}

export default App;
