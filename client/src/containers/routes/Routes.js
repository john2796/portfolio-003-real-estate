import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/layout/HeaderContainer/Header";
import Main from "../../components/layout/MainContainer/Main";
import SingleListing from "../../components/layout/MainContainer/singleListing/SingleListing";
import Footer from "../../components/layout/FooterContainer/Footer";
import Properties from "../../components/properties/Properties";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" render={props => <Header {...props} />} />
        <Route exact path="/" component={Main} />
        <Route path="/property" component={Properties} />
        <Route path="/listing/:id" component={SingleListing} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Routes;
