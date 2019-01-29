import React from "react";
import Layout from "./components/layout/Layout";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Route path="/" render={props => <Layout {...props} />} />
    </React.Fragment>
  );
};

export default App;
