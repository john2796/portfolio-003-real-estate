import React from "react";
import LatestListing from "./LatestListing/LatestListing";
import Wpresidence from "./Wpresidence/Wpresidence";
import NewListing from "./newlisting/NewListing";

const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      <LatestListing />
      <NewListing />
    </React.Fragment>
  );
};

export default Main;
