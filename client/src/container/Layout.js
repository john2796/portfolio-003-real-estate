import React from "react";
import Header from "../components/layout/HeaderContainer/Header";
import Main from "../components/layout/MainContainer/Main";
import Footer from "../components/layout/FooterContainer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
