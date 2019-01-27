import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
const ListinCard = lazy(() => import("./ListingCard"));
const tabData = ["Apartments", "Houses", "Villas", "Retail", "Land"];
const cardData = [
  {
    id: 1,
    headline: "Testing headline",
    tab: "Apartments",
    img: "image goes here",
    author: "author field testing here",
    images: [
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
    ]
  },
  {
    id: 2,
    headline: "Testing headline",
    tab: "Houses",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    id: 3,
    headline: "Testing headline",
    tab: "Villas",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    id: 4,
    headline: "Testing headline",
    tab: "Retail",
    img: "image goes here",
    author: "author field testing here"
  },
  {
    id: 5,
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

  next = id => {
    const item = cardData.find(item => item.id === id);
    const nextIndex =
      this.state.activeIndex === item.images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = id => {
    const item = cardData.find(item => item.id === id);
    const nextIndex =
      this.state.activeIndex === 0
        ? item.images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { tabs, selected, activeIndex } = this.state;
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
                className={tab === selected ? "tab active-tab" : "tab"}
                onClick={() => this.selectedTab(tab)}
              >
                {tab}
              </h5>
            ))}
          </nav>
          {this.filterData().map(item => {
            return (
              <div key={item.id} className="listing-card ">
                {item.tab}
                <Suspense fallback={<div>Loading...</div>}>
                  <ListinCard
                    id={item.id}
                    images={item.images}
                    tooltipOpen={this.state.tooltipOpen}
                    toggle={this.toggle}
                    previous={this.previous}
                    next={this.next}
                    activeIndex={activeIndex}
                    selected={selected}
                    selectedTab={this.selectedTab}
                  />
                  <ListinCard
                    id={item.id}
                    images={item.images}
                    tooltipOpen={this.state.tooltipOpen}
                    toggle={this.toggle}
                    previous={this.previous}
                    next={this.next}
                    activeIndex={activeIndex}
                    selected={selected}
                    selectedTab={this.selectedTab}
                  />
                </Suspense>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default LatestListing;
