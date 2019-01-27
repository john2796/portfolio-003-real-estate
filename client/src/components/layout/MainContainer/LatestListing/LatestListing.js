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
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Tooltip
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

const items = [
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2016/03/city_9-1-525x328.jpg"
  },
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter1013-525x328.jpg"
  },
  {
    src:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
  }
];
class LatestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: tabData,
      cardData,
      selected: "Apartments",
      activeIndex: 0,
      tooltipOpen: false
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

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { tabs, selectedTab, selected, activeIndex } = this.state;
    console.log(selected);
    console.log(this.filterData());

    const slides = items.map(item => {
      return (
        <CarouselItem key={item.src}>
          <div
            className="carousel-parent"
            style={{ backgroundImage: `url(${item.src})`, height: 320 }}
            alt={item.altText}
          />
        </CarouselItem>
      );
    });
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
                  <Carousel activeIndex={activeIndex}>
                    <div className="carousel-info">
                      <p class="rentals ">Rentals</p>
                      <div>
                        <i className="far fa-heart" id="favorites-heart" />
                        <Tooltip
                          placement="top"
                          isOpen={this.state.tooltipOpen}
                          target="favorites-heart"
                          toggle={this.toggle}
                        >
                          add to <br /> favorites
                        </Tooltip>
                      </div>
                    </div>
                    {slides}

                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={this.previous}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={this.next}
                    />
                  </Carousel>
                  <CardBody>
                    <CardTitle>Luxury Villa In Rego Park</CardTitle>
                    <CardSubtitle> $ 2,100 / month</CardSubtitle>
                    <CardText>
                      Just steps away from QM2 express bus to Manhattan and
                      local buses; only minutes from the LIRR. Walki [more]
                    </CardText>

                    <div className="property_listing_details">
                      {" "}
                      <span className="infobath_unit_type2">
                        <i className="fas fa-tint" />4
                      </span>{" "}
                      <span className="infogarage_unit_type2">
                        <i className="fas fa-car" />
                        10
                      </span>{" "}
                      <span className="infosize_unit_type2">
                        <i className="far fa-map" />5 000,00 ft<sup>2</sup>
                      </span>
                    </div>

                    <div className="property-location">
                      <div className="property-name">
                        <img
                          src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-1-120x120.jpg"
                          alt=""
                        />
                        <h5>Michael Suttherland</h5>
                      </div>
                      <span className="property-share">
                        <i className="fas fa-share-alt" />
                        <i className="fas fa-plus" />
                      </span>
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
