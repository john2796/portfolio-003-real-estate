import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const LatestRightCardStyle = styled.div`
  .listings-item {
    display: flex;
    font-size: 1.4rem;
    font-weight: 700;
    color: #222222;
    margin-bottom: 15px;
    .listing-right-item {
      margin-left: 8px;
    }
  }
  .item-price {
    color: #fdcc01;
  }
`;
const latestlisting = [
  {
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/house_1920-105x70.jpeg",
    price: "$ 800",
    title: "Boutique Space Greenville"
  },
  {
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstate1893-105x70.jpg",
    price: "$ 16,000 / month",
    title: "Office Space Central Ave"
  },
  {
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0733-105x70.jpg",
    price: "from $ 55,000",
    title: "Villa On Washington Ave"
  }
];
const LatestRightCard = () => {
  return (
    <LatestRightCardStyle>
      <Card>
        <CardBody>
          <CardTitle>Latest Listings</CardTitle>
          {latestlisting.map((list, index) => {
            return (
              <div className="listings-item" key={index}>
                <img src={list.image} alt={list.title} />
                <div className="listing-right-item">
                  <p>{list.title}</p>
                  <p className="item-price"> {list.price}</p>
                </div>
              </div>
            );
          })}
        </CardBody>
      </Card>
    </LatestRightCardStyle>
  );
};

export default LatestRightCard;
