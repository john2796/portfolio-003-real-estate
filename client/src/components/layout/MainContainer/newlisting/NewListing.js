import React, { Component } from "react";

class NewListing extends Component {
  render() {
    return (
      <div className="navlist-style">
        <svg
          className="uvc-svg-triangle-2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="#f7f7f7"
          width="100%"
          height={60}
          viewBox="0 0 0.156661 0.1"
          style={{ height: 60 }}
        >
          <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 " />
        </svg>

        <div className="container">
          <div className="newlisting-parent">
            <h2 className="main-subtitle white">See the newest listings</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NewListing;
