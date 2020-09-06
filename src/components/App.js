import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Team from "./Teams/Team";
import Players from "./Teams/Players";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route
          path="/arsenal/overview"
          render={() => (
            <Team image="../images/Arsenal.svg" team="Arsenal" />
          )}
        />
        <Route
          path="/arsenal/players"
          render={() => (
            <Players image="../images/Arsenal.svg" team="Arsenal" />
          )}
        />
        <Route
          path="/astonvilla/overview"
          render={() => (
            <Team image="../images/AstonVilla.svg" team="Aston Villa" />
          )}
        />
        <Route
          path="/brighton/overview"
          render={() => (
            <Team image="../images/Brighton.svg" team="Brighton" />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
