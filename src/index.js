import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById("root")
);
