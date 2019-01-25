import React from "react";
import PropTypes from "prop-types";
import LatestListing from "./LatestListing/LatestListing";
import Wpresidence from "./Wpresidence/Wpresidence";

const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      <LatestListing />
    </React.Fragment>
  );
};

Main.propTypes = {};

export default Main;
