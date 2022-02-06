import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Results from "./Result";

export const Routess = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/">
        <Navigate to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>
    </Routes>
  </div>
);
