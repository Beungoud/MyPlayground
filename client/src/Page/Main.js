import React, { Component } from "react";
import MainPage from "./MainPage";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default Main;
