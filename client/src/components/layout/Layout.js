import React from "react";
import Header from "./HeaderContainer/Header";
import Main from "./MainContainer/Main";
import Footer from "./FooterContainer/Footer";

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
