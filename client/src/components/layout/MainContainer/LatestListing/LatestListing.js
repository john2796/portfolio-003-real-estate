import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

class LatestListing extends Component {
  render() {
    return (
      <React.Fragment>
        <svg
          className="uvc-svg-triangle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="#fff"
          width="100%"
          height={60}
          viewBox="0 0 0.156661 0.1"
          style={{ height: 60 }}
        >
          <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 " />
        </svg>
        <div className="listing-wrapper">
          <h2 className="listing-title">Our latest listings</h2>
          <nav className="listing-nav">
            <NavLink exact to="/apartments" activeClassName="current-listing">
              Apartments
            </NavLink>
            <NavLink to="/houses" activeClassName="current-listing">
              Houses
            </NavLink>
            <NavLink to="/villas" activeClassName="current-listing">
              Villas
            </NavLink>
            <NavLink to="/retail" activeClassName="current-listing">
              Retail
            </NavLink>
            <NavLink to="/land" activeClassName="current-listing">
              Land
            </NavLink>
          </nav>
          <Route
            path="/houses"
            render={() => {
              return <div>testing</div>;
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default LatestListing;
