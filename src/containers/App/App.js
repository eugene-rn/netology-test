import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import EmployeePage from "../EmployeePage";
import "./App.css";

const App = () => (
  <div className="App">
    <header>База сотрудников</header>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/employee/" component={EmployeePage} />
    </Switch>
  </div>
);

export default App;
