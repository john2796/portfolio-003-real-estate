import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

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
              <div key={i} className="listing-card">
                <div
                  className="property_listing property_unit_type2  "
                  data-link
                  style={{ height: 552 }}
                >
                  <div className="listing-unit-img-wrapper">
                    <div
                      id="property_unit_carousel_5c4a71f52bbb9"
                      className="carousel property_unit_carousel slide "
                      data-ride="carousel"
                      data-interval="false"
                    >
                      <div className="carousel-inner">
                        <div className="item">
                          <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                            <img
                              width={525}
                              height={328}
                              src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/house_1920-525x328.jpeg"
                              className="lazyload img-responsive wp-post-image"
                              alt
                              data-original="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/house_1920-525x328.jpeg"
                            />
                          </a>
                        </div>
                        <div className="item lazy-load-item active">
                          <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                            <img
                              data-lazy-load-src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile373-525x328.jpg"
                              alt="Boutique Space Greenville"
                              className="img-responsive"
                              src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile373-525x328.jpg"
                            />
                          </a>
                        </div>
                        <div className="item lazy-load-item">
                          <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                            <img
                              data-lazy-load-src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile0413-525x328.jpg"
                              alt="Boutique Space Greenville"
                              className="img-responsive"
                              src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile0413-525x328.jpg"
                            />
                          </a>
                        </div>
                        <div className="item lazy-load-item">
                          <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                            <img
                              data-lazy-load-src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile443-525x328.jpg"
                              alt="Boutique Space Greenville"
                              className="img-responsive"
                              src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateMourgueFile443-525x328.jpg"
                            />
                          </a>
                        </div>
                      </div>
                      <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                        {" "}
                      </a>
                      <a
                        className="left  carousel-control"
                        href="#property_unit_carousel_5c4a71f52bbb9"
                        data-slide="prev"
                      >
                        <i className="demo-icon icon-left-open-big" />
                      </a>
                      <a
                        className="right  carousel-control"
                        href="#property_unit_carousel_5c4a71f52bbb9"
                        data-slide="next"
                      >
                        <i className="demo-icon icon-right-open-big" />
                      </a>
                    </div>{" "}
                    <span
                      className="icon-fav icon-fav-off"
                      data-original-title="add to favorites"
                      data-postid={160}
                    />
                    <div className="tag-wrapper">
                      <div className="featured_div">Featured</div>
                      <div className="status-wrapper">
                        <div className="action_tag_wrapper Rentals ">
                          Rentals
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>
                    <a href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/">
                      Boutique Space Greenville{" "}
                    </a>
                  </h4>
                  <div className="listing_unit_price_wrapper">
                    <span className="price_label price_label_before" /> $ 800{" "}
                    <span className="price_label" />
                  </div>
                  <div className="listing_details the_grid_view">
                    Downtown Frederick hot spot. Top location for local
                    entertainment. All fixtures are included. Liquor{" "}
                    <a
                      href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/"
                      className="unit_more_x"
                    >
                      [more]
                    </a>{" "}
                  </div>
                  <div className="listing_details the_list_view">
                    Downtown Frederick hot spot. Top location for local
                    entertainment. All fixtures are includ{" "}
                    <a
                      href="https://losangeles.wpresidence.net/properties/boutique-space-greenville/"
                      className="unit_more_x"
                    >
                      [more]
                    </a>{" "}
                  </div>
                  <div className="property_listing_details">
                    <span className="infobath_unit_type2">4</span>{" "}
                    <span className="infogarage_unit_type2">10</span>{" "}
                    <span className="infosize_unit_type2">
                      5 000,00 ft<sup>2</sup>
                    </span>{" "}
                  </div>
                  <div className="property_location">
                    <div className="property_agent_wrapper">
                      <div
                        className="property_agent_image"
                        style={{
                          backgroundImage:
                            'url("https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-1-120x120.jpg")'
                        }}
                      />
                      <div className="property_agent_image_sign">
                        <i className="fa fa-user-circle-o" aria-hidden="true" />
                      </div>
                      <a href="https://losangeles.wpresidence.net/agents/michael-suttherland/">
                        Michael Suttherland
                      </a>{" "}
                    </div>
                    <div className="listing_actions">
                      <div className="share_unit" style={{ display: "none" }}>
                        <a
                          href="https://www.facebook.com/sharer.php?u=https://losangeles.wpresidence.net/properties/boutique-space-greenville/&t=Boutique+Space+Greenville"
                          target="_blank"
                          className="social_facebook"
                        />
                        <a
                          href="https://twitter.com/home?status=Boutique+Space+Greenville+https%3A%2F%2Flosangeles.wpresidence.net%2Fproperties%2Fboutique-space-greenville%2F"
                          className="social_tweet"
                          target="_blank"
                        />
                        <a
                          href="https://pinterest.com/pin/create/button/?url=https://losangeles.wpresidence.net/properties/boutique-space-greenville/&media=https://losangeles.wpresidence.net/wp-content/uploads/2014/05/house_1920-1920x790.jpeg&description=Boutique+Space+Greenville"
                          target="_blank"
                          className="social_pinterest"
                        />
                        <a
                          href="https://plus.google.com/share?url=https://losangeles.wpresidence.net/properties/boutique-space-greenville/"
                          onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                          target="_blank"
                          className="social_google"
                        />
                      </div>
                      <span
                        className="share_list"
                        data-original-title="share"
                      />
                      <span
                        className="compare-action"
                        data-original-title="compare"
                        data-pimage="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/house_1920-143x83.jpeg"
                        data-pid={160}
                      />
                    </div>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default LatestListing;
