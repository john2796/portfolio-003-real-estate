import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import styled from "styled-components";

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
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </BreadCrumbsStyle>
  );
};

export default BreadCrumbs;
