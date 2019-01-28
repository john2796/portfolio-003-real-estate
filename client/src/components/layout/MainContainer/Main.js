import React from "react";
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

export default Main;
