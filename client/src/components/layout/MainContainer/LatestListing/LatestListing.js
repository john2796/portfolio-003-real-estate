import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
const ListingCard = lazy(() => import("./ListingCard"));
const tabData = ["Apartments", "Houses", "Villas", "Retail", "Land"];

class LatestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: tabData,
      selected: "Apartments",
      tooltipOpen: false
    };
  }

  filterData = () => {
    const cardData = this.props.cardData;
    if (this.state.selected === "needtochangelaterbugissue") {
      return cardData;
    } else {
      return cardData.filter(data => data.tab === this.state.selected);
    }
  };
  selectedTab = tab => {
    this.setState({ selected: tab });
  };
  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { tabs, selected } = this.state;
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
            {!this.filterData().length
              ? "items is not available"
              : tabs.map((tab, i) => (
                  <h5
                    key={tab}
                    className={tab === selected ? "tab active-tab" : "tab"}
                    onClick={() => this.selectedTab(tab)}
                    style={
                      tab !== selected
                        ? { background: "#faca00", color: "#fffefc" }
                        : null
                    }
                  >
                    {tab}
                  </h5>
                ))}
          </nav>
          <div className="listing-flexparent">
            <Suspense fallback={<div>Loading...</div>}>
              {this.filterData().map((item, idx) => {
                return (
                  <div key={idx} className="listing-card">
                    <ListingCard
                      id={item.id}
                      images={item.images}
                      tooltipOpen={this.state.tooltipOpen}
                      toggle={this.toggle}
                      selected={selected}
                      selectedTab={this.selectedTab}
                    />
                  </div>
                );
              })}
            </Suspense>
          </div>
          <button className="secondary-btn">Load More Listings</button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  cardData: state.listing.cardData
});

export default connect(mapStateToProps)(LatestListing);
