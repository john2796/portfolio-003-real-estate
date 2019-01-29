import React from "react";
import { Route } from "react-router-dom";

import Header from "./HeaderContainer/Header";
import Main from "./MainContainer/Main";
import Footer from "./FooterContainer/Footer";
import SingleListing from "./MainContainer/singleListing/SingleListing";

const Layout = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
      <Route path="/listing/:id" component={SingleListing} />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
