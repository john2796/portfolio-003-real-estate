import React from "react";
import LatestListing from "./LatestListing/LatestListing";
import Wpresidence from "./Wpresidence/Wpresidence";
import NewListing from "./newlisting/NewListing";
import ClientStats from "./clientstats/ClientStats";
import SingleListing from "./singleListing/SingleListing";
import { Route } from "react-router-dom";
const Main = props => {
  return (
    <React.Fragment>
      <Wpresidence />
      <LatestListing />
      <NewListing />
      <ClientStats />
      <Route path="/:id" component={SingleListing} />
    </React.Fragment>
  );
};

export default Main;
