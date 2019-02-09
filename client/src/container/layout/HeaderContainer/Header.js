import React, { Component } from "react";
import TopNavbar from "./topnavbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import HeaderInfo from "./headerinfo/HeaderInfo";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    let conditionalStyle =
      this.props.location.pathname === `/`
        ? "bg-banner-header"
        : "listing-style";
    let topnavbar =
      this.props.location.pathname === `/`
        ? "textwidget"
        : "listing-textwidget";
    console.log(this.props.location.pathname);
    return (
      <div>
        <div className={conditionalStyle}>
          <TopNavbar topnavbar={topnavbar} />
          {/* the style for bot topnavbar , headerinfo, and navbar is in _Header.scss */}
          <Navbar />
          <HeaderInfo />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listId: state.listing.listId
});

export default connect(mapStateToProps)(withRouter(Header));
