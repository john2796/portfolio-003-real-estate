import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const CardInfoStyle = styled.div`
  .cardinfo-img {
    border-bottom: 3px solid #fdcc01;
  }
  .icons {
    font-size: 1.5rem;
    i {
      display: inline-block;
      margin-right: 1.4rem;
      color: #8593a9;
      &:hover {
        color: #fdcc01;
      }
    }
  }
  .subtitle {
    color: #767676;
    font-size: 1.3rem;
    margin: -10px 0;
    margin-bottom: 5px;
  }
  .contactinfo {
    margin-top: 10px;
    margin-bottom: 25px;
    color: #8593a9;
    font-size: 1.4rem;
    line-height: 1.1;
    i {
      margin-right: 10px;
    }
  }
`;
const CardInfo = () => {
  return (
    <CardInfoStyle>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-525x328.jpg"
          alt="Card image cap"
          className="cardinfo-img"
        />
        <CardBody>
          <CardTitle>Maria Barlow</CardTitle>
          <p className="subtitle">sales executive</p>

          <div className="contactinfo">
            <p>
              <i className="fa fa-phone" />
              (305) 555-4446
            </p>
            <p>
              <i className="fa fa-print" />
              (305) 555-4446
            </p>
            <p>
              <i className="far fa-envelope" />
              youremails@gmail.com
            </p>
            <p>
              <i className="fab fa-skype" />
              yourskypeid
            </p>
          </div>

          <div className="icons">
            <a href="/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/">
              <i className="fab fa-pinterest-p" />
            </a>
            <a href="/">
              <i className="fab fa-twitter" />
            </a>
            <a href="/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </CardBody>
      </Card>
    </CardInfoStyle>
  );
};

export default CardInfo;
