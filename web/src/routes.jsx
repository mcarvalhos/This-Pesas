import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Application from "./pages/Application";
import Login from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={Application} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
