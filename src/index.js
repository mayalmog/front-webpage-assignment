import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.min.css";

import { RootCmp } from "./root-cmp";
import "./assets/styles/main.scss";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RootCmp />
    </Router>
  </React.StrictMode>
);
