import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Button
} from "reactstrap";
const tabData = ["Apartments", "Houses", "Villas", "Retail", "Land"];
const cardData = [
  {
    headline: "Testing headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    headline: "Testing headline",
    tab: "Houses",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    headline: "Testing headline",
    tab: "Villas",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    headline: "Testing headline",
    tab: "Retail",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    headline: "Testing headline",
    tab: "Land",
    img: "image goes here",
    author: "author field testing here"
  }
];
class LatestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: tabData,
      cardData,
      selected: "Apartments"
    };
  }

  filterData = () => {
    const cardData = this.state.cardData;
    if (this.state.selected === "All") {
      return this.state.cardData;
    } else {
      return cardData.filter(data => data.tab === this.state.selected);
    }
  };

  selectedTab = tab => {
    this.setState({ selected: tab });
  };

  render() {
    const { tabs, selectedTab, selected } = this.state;
    console.log(selected);
    console.log(this.filterData());

    return (
      <React.Fragment>
        <svg
          className="uvc-svg-triangle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="#fff"
          width="100%"
          height={60}
          viewBox="0 0 0.156661 0.1"
          style={{ height: 60 }}
        >
          <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 " />
        </svg>
        <div className="listing-wrapper">
          <h2 className="listing-title">Our latest listings</h2>
          <nav className="listing-nav">
            {tabs.map((tab, i) => (
              <h5
                key={i}
                className={tab === selectedTab ? "tab active-tab" : "tab"}
                onClick={() => this.selectedTab(tab)}
              >
                {tab}
              </h5>
            ))}
          </nav>
          {this.filterData().map((item, i) => {
            return (
              <div key={i} className="listing-card ">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://losangeles.wpresidence.net/wp-content/uploads/2016/03/city_9-1-525x328.jpg"
                    alt="Card image cap"
                    className="card-image"
                  />

                  {/* <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                  </CardImgOverlay> */}
                  <CardBody>
                    <CardTitle>
                      FeaturedRentals Luxury Villa In Rego Park
                    </CardTitle>
                    <CardSubtitle> $ 2,100 / month</CardSubtitle>
                    <CardText>
                      Just steps away from QM2 express bus to Manhattan and
                      local buses; only minutes from the LIRR. Walki [more]
                    </CardText>
                    <div>
                      <p>icons and sqft2</p>
                    </div>
                    <div>
                      <h3>Janet Richmond</h3>
                      <span>icons here</span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default LatestListing;
