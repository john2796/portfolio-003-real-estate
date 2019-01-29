import React from "react";

const TopNavbar = ({ topnavbar }) => {
  return (
    <>
      <p className={topnavbar}>
        <i className="fa fa-phone" aria-hidden="true" /> 011 668 55456
        <i className="fa fa-map-marker" aria-hidden="true" />
        345 Mapple street, Los Angeles, California
      </p>
    </>
  );
};

export default TopNavbar;
