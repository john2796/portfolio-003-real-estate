import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
const SocialLinksCardStyle = styled.div`
  .social_sidebar_internal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22%;
      margin: 0 3% 3% 0;
      padding: 11px 0;
      background-color: #f0f0f0;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      text-decoration: none;
      &:hover {
        background: #fdcc01;
      }
      i {
        width: 22px;
        height: 22px;
        font-size: 19px;
        color: #a6b3bb;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .card-title {
    margin-bottom: 15px;
  }
`;
const SocialLinksCard = () => {
  return (
    <SocialLinksCardStyle>
      <Card>
        <CardBody>
          <CardTitle>Social Links:</CardTitle>
          <div className="social_sidebar_internal">
            <a href="/" target="_blank">
              <i className="fa fa-rss  fa-fw" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-dribbble" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-tumblr" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-pinterest" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-youtube" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-vimeo" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a href="/" target="_blank">
              <i className="fab fa-foursquare" />
            </a>
          </div>
        </CardBody>
      </Card>
    </SocialLinksCardStyle>
  );
};

export default SocialLinksCard;
