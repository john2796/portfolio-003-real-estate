import React from "react";
import { Route } from "react-router-dom";
import Landing from "./container/Landing";
import SingleListing from "./components/layout/MainContainer/singleListing/SingleListing";

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route
        path="/listing/:id"
        render={props => <SingleListing {...props} />}
      />
    </React.Fragment>
  );
};

export default App;
