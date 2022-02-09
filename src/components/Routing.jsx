import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Results } from "./Results";
export const Routing = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};
