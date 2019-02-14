import React from "react";
import ReactDOM from "react-dom";
import "./style/libs/Index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App);
const app = (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
