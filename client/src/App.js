import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./container/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" render={props => <LandingPage {...props} />} />
    </React.Fragment>
  );
};

export default App;
