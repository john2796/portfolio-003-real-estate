import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./HeaderContainer/Header";
import Main from "./MainContainer/Main";
import Footer from "./FooterContainer/Footer";
import SingleListing from "./MainContainer/singleListing/SingleListing";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Layout = props => {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
      <Route path="/listing/:id" component={SingleListing} />
      {/* <Switch>
        <Route path="*" component={NoMatch} />
      </Switch> */}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
