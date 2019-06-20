import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import EmployeePage from "../EmployeePage";
import Header from 'components/Header';
import "./App.css";

const App = () => (
  <div className="App">
    <Header title="База сотрудников" />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/:id" component={EmployeePage} />
    </Switch>
  </div>
);

export default App;
