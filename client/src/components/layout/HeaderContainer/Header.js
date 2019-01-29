import React, { Component } from "react";
import TopNavbar from "./topnavbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import HeaderInfo from "./headerinfo/HeaderInfo";
import { Route } from "react-router-dom";
class Header extends Component {
  componentDidMount() {
    console.log("this.props", this.props);
  }
  render() {
    let conditionalStyle =
      this.props.location.pathname === "/listing/1"
        ? "listing-style"
        : "bg-banner-header";
    let topnavbar =
      this.props.location.pathname === "/listing/1"
        ? "listing-textwidge"
        : "textwidge";
    return (
      <div>
        <div className={conditionalStyle}>
          <TopNavbar topnavbar={topnavbar} />
          {/* the style for bot topnavbar , headerinfo, and navbar is in _Header.scss */}
          <Navbar />
          <Route exact path="/" component={HeaderInfo} />
        </div>
      </div>
    );
  }
}

export default Header;
