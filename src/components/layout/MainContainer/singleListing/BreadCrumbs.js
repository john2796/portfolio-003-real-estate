import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadCrumbsStyle = styled.div`
  .breadcrumb {
    background: inherit;
    font-size: 1.3rem;
  }
`;
const BreadCrumbs = () => {
  return (
    <BreadCrumbsStyle>
      <Breadcrumb className="bg-color">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Listing</BreadcrumbItem>
      </Breadcrumb>
    </BreadCrumbsStyle>
  );
};

export default BreadCrumbs;
