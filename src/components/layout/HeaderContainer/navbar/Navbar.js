import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

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
          <div>
            <Link to="/">Home</Link>
            <Link to="/property">Properties</Link>
            {/* hard coded nums for dev */}
            <Link to="/listing/2">Agents</Link>
            <a href="/#">Blog</a>
            <a href="/#">Features</a>
            <a href="/#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/#">
              <i className="fab fa-pinterest-p" />
            </a>
            <a href="/#">
              <i className="fab fa-twitter" />
            </a>
            <a href="/#">
              <i className="fab fa-instagram" />
            </a>
          </div>
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
