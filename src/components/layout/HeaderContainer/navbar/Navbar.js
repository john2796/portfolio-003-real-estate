import React, { Component } from "react"
import Drawer from "../../../drawer/Drawer"
import NavList from "../../../nav-list/NavList"
import logo_la_transparent from "../../../../assets/logo_la_transparent.png"
import logo from "../../../../assets/logo2018-v1-la.png"

class Navbar extends Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    return (
      <>
        <nav className="main-nav">
          <div>
            <a href="/" className="logo">
              <div>
                <img
                  className="logo-image"
                  style={{ marginTop: 0 }}
                  src={logo}
                  alt="logo"
                />
              </div>
            </a>
          </div>
          <NavList />
        </nav>
        {/* tablet nav */}
        <Drawer
          className="main-nav-drawer"
          toggleDrawer={this.toggleDrawer}
          left={this.state.left}
        />
        <nav className="tablet-nav ">
          <div className="twrapper">
            <i
              className=" fa fa-bars"
              onClick={this.toggleDrawer("left", true)}
            />
            <div className="logo-wrp">
              <img
                className="tablet-logo"
                src={logo_la_transparent}
                alt="tablet-logo"
              />
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
