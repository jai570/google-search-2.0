import React from "react";
import ReactDOM from "react-dom";
import "./input.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ResultContextProvider from "../src/context/ResultContextProvider";

ReactDOM.render(
  <Router>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </Router>,
  document.getElementById("root")
);
