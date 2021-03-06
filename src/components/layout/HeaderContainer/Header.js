import React, { Component } from "react"
import TopNavbar from "./topnavbar/TopNavbar"
import Navbar from "./navbar/Navbar"
import HeaderInfo from "./headerinfo/HeaderInfo"
import { withRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import headerla from "../../../assets/headerla.jpg"

class Header extends Component {
  render() {
    let conditionalStyle =
      this.props.location.pathname !== "/"
        ? "listing-style"
        : "bg-banner-header"
    let topnavbar =
      this.props.location.pathname !== "/" ? "listing-textwidget" : "textwidget"
    return (
      <div>
        <div
          className={conditionalStyle}
          style={{
            backgroundImage:
              conditionalStyle === "bg-banner-header" && `url(${headerla})`
          }}
        >
          <TopNavbar topnavbar={topnavbar} />
          {/* the style for bot topnavbar , headerinfo, and navbar is in _Header.scss */}
          <Navbar />
          <Route exact path="/" component={HeaderInfo} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listId: state.listing.listId
})

export default connect(mapStateToProps)(withRouter(Header))
