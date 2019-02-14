import React, { Component } from "react";

class ClientStats extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="parallax-item">
          <p>
            <span className="number">12</span>
            Years since we started this agency
          </p>
          <p>
            <span className="number">457</span>
            Clients that trusted us with their business
          </p>
          <p>
            <span className="number">375</span>
            Homes that found new owners through us
          </p>
          <p>
            <span className="number">250</span>
            Rented flats in Los Angeles metropolitan area
          </p>
        </div>
        <div className="getintouch">
          <h2 className="main-subtitle white">
            Contact us now for a free expertise on your home
          </h2>
          <button className="secondary-btn getintouch-btn">Get in touch</button>
        </div>
      </div>
    );
  }
}

export default ClientStats;
