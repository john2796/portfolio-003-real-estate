import React from "react";
import { withRouter } from "react-router-dom";

const HeaderInfo = props => (
  <div
    className="header-info-flex"
    hidden={props.location.pathname === "/" ? false : true}
  >
    <div className="header-info-item">
      <h4 className="header-title ">Los Angeles Experts</h4>
      <p className="header-ptag">
        Through our broad-based marketing opportunities and international
        presence, we provide maximum exposure for our listings, reaching
        qualified buyeres regardless of where they are based.
      </p>
      <div className="header-yellow-btn">
        VIEW MORE
        <i className="fas fa-chevron-right" />
      </div>
    </div>

    <div className="header-carousel-indicators">
      <div className="tp-bullet selected" />
      <div className="tp-bullet" />
      <div className="tp-bullet" />
    </div>
  </div>
);

export default withRouter(HeaderInfo);
