import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const OurListingCardStyle = styled.div`
  .ourlisting-lists {
    margin: 15px 0;
  }
  p {
    font-size: 1.4rem;
    color: #6d6d6d;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 1.3rem;
    span {
      color: #8593a9;
    }
  }
`;

const OurListingCard = () => {
  return (
    <OurListingCardStyle>
      <Card>
        <CardBody>
          <CardTitle>Our Listings</CardTitle>
          <div className="ourlisting-lists">
            <p>
              Apartments <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Condos <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Houses <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Industrial <span>(2)</span>
            </p>
            {/* <hr /> */}
            {/* <hr /> */}
            <p>
              Land <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Offices <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Retail <span>(2)</span>
            </p>
            {/* <hr /> */}
            <p>
              Villas <span>(2)</span>
            </p>
            {/* <hr /> */}
          </div>
        </CardBody>
      </Card>
    </OurListingCardStyle>
  );
};

export default OurListingCard;
