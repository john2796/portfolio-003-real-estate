import React, { Component } from "react";
import TopNavbar from "./topnavbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import HeaderInfo from "./headerinfo/HeaderInfo";

class Header extends Component {
  componentDidMount() {
    console.log("this.props", this.props);
  }

  render() {
    return (
      <div>
        <div className="bg-banner-header ">
          {/* the style for bot topnavbar , headerinfo, and navbar is in _Header.scss */}
          <TopNavbar />
          <Navbar />
          <HeaderInfo />
        </div>
      </div>
    );
  }
}

export default Header;
