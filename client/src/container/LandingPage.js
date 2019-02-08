import React from "react";
import Header from "../components/layout/HeaderContainer/Header";
import Main from "../components/layout/MainContainer/Main";
import Footer from "../components/layout/FooterContainer/Footer";
import { Route, withRouter } from "react-router-dom";
const Layout = ({ match }) => {
  return (
    <React.Fragment>
      <Header />
      <Route path={`${match.path}`} render={props => <Main {...props} />} />
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Layout);
