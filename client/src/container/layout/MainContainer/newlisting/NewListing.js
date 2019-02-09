import React, { Component } from "react";

const newestlistings = [
  {
    tab: "Apartments",
    listing: 2,
    caption: "great deals!",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/demo1-980x777.jpg"
  },
  {
    tab: "Condos",
    listing: 1,
    caption: "the best deals ",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new_house-980x777.jpeg"
  },
  {
    tab: "Houses",
    listing: 1,
    caption: "luxury homes only ",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/new-980x777.jpeg"
  },
  {
    tab: "Retail",
    listing: 2,
    caption: "the cheapest offers ",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/building-980x777.jpg"
  },
  {
    tab: "Land",
    listing: 2,
    caption: "call us today ",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/home-8-980x777.jpg"
  },
  {
    tab: "Offices",
    listing: 1,
    caption: "rent the best offers ",
    image:
      "https://losangeles.wpresidence.net/wp-content/uploads/2018/04/home-10-980x777.jpg"
  }
];

class NewListing extends Component {
  render() {
    return (
      <div className="navlist-style">
        <svg
          className="uvc-svg-triangle-2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="#f7f7f7"
          width="100%"
          height={60}
          viewBox="0 0 0.156661 0.1"
          style={{ height: 60 }}
        >
          <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 " />
        </svg>

        <div className="newlisting-wrapper">
          <div className="newlisting-parent">
            <h2 className="main-subtitle white">See the newest listings</h2>
            <div className="newlisting-flex-parent">
              {newestlistings.map(item => {
                return (
                  <div
                    className="newlisting-card"
                    key={item.tab}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: 320
                    }}
                  >
                    <div className="newlist-card-item">
                      <h3>{item.tab}</h3>
                      <span>{item.caption}</span>
                      <p>{item.listing} LISTINGS</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewListing;
