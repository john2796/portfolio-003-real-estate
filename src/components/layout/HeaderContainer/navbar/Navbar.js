import React, { Component } from "react";
import Drawer from "../../../drawer/Drawer";
import NavList from "../../../nav-list/NavList";

class Navbar extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

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
                  src="https://losangeles.wpresidence.net/wp-content/uploads/2018/06/logo2018-v1-la.png"
                  // className="img-responsive retina_ready"
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
                src="https://losangeles.wpresidence.net/wp-content/uploads/2016/08/logo_la_transparent.png"
                alt="tablet-logo"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
