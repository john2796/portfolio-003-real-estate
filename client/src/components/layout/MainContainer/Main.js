import React from "react";

import LatestListing from "./LatestListing/LatestListing";
import Wpresidence from "./Wpresidence/Wpresidence";
import NewListing from "./newlisting/NewListing";
import ClientStats from "./clientstats/ClientStats";

const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      <LatestListing />
      <NewListing />
      <ClientStats />
    </React.Fragment>
  );
};

export default Main;
