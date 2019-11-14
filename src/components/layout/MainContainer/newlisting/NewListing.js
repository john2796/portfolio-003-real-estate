import React, { Component } from "react"
import house_1 from "../../../../assets/house_1.jpg"
import house_2 from "../../../../assets/house_2.jpg"
import house_3 from "../../../../assets/house_3.jpg"
import house_4 from "../../../../assets/house_4.jpg"
import house_5 from "../../../../assets/house_5.jpg"
import house_6 from "../../../../assets/house_6.jpg"

const newestlistings = [
  {
    tab: "Apartments",
    listing: 2,
    caption: "great deals!",
    image: house_1
  },
  {
    tab: "Condos",
    listing: 1,
    caption: "the best deals ",
    image: house_2
  },
  {
    tab: "Houses",
    listing: 1,
    caption: "luxury homes only ",
    image: house_3
  },
  {
    tab: "Retail",
    listing: 2,
    caption: "the cheapest offers ",
    image: house_4
  },
  {
    tab: "Land",
    listing: 2,
    caption: "call us today ",
    image: house_5
  },
  {
    tab: "Offices",
    listing: 1,
    caption: "rent the best offers ",
    image: house_6
  }
]

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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewListing
