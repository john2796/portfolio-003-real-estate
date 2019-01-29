import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg-banner-header ">
          <p className="textwidget">
            <i className="fa fa-phone" aria-hidden="true" /> 011 668 55456
            <i className="fa fa-map-marker" aria-hidden="true" />
            345 Mapple street, Los Angeles, California
          </p>
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
              <a href="/">Home</a>
              <a href="/">Demos</a>
              <a href="/">Properties</a>
              <a href="/">Agents</a>
              <a href="/">Blog</a>
              <a href="/">Features</a>
              <a href="/">Home</a>
              <a href="/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="/">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="/">
                <i className="fab fa-twitter" />
              </a>
              <a href="/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </nav>

          {/* tablet nav */}
          <nav className="tablet-nav ">
            <i className=" fa fa-bars" />
            <img
              src="https://losangeles.wpresidence.net/wp-content/uploads/2016/08/logo_la_transparent.png"
              alt="tablet-logo"
            />
          </nav>
          <div className="header-info-flex">
            <div className="header-info-item">
              <h4 className="header-title ">Los Angeles Experts</h4>
              <p className="header-ptag">
                Through our broad-based marketing opportunities and
                international presence, we provide maximum exposure for our
                listings, reaching qualified buyeres regardless of where they
                are based.
              </p>
            </div>

            <div className="header-carousel-indicators">
              <div className="tp-bullet selected" />
              <div className="tp-bullet" />
              <div className="tp-bullet" />
            </div>
          </div>

          <div className="header-yellow-btn">
            VIEW MORE
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
