import React from "react";
import PropTypes from "prop-types";
import Wpresidence from "./Wpresidence";
import LatestListing from "./LatestListing/LatestListing";

const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      test
      <LatestListing />
    </React.Fragment>
  );
};

Main.propTypes = {};

export default Main;
