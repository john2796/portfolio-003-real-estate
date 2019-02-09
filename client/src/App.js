import React from "react";
import { Route } from "react-router-dom";
import Landing from "./container/Landing";
import SingleListing from "./container/layout/MainContainer/singleListing/SingleListing";
import Header from "./container/layout/HeaderContainer/Header";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" render={props => <Header {...props} />} />
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route
        path="/listing/:id"
        render={props => <SingleListing {...props} />}
      />
    </React.Fragment>
  );
};

export default App;
