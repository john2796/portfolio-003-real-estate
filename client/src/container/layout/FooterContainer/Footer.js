import React, { Component } from "react";
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
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer-flexparent">
            <div className="footer-item">
              <h3 className="footer-item-title">About</h3>
              <p>
                WP RESIDENCE is committed to delivering a high level of
                expertise, customer service, and attention to detail to the
                marketing and sales of luxury real estate, and rental
                properties.{" "}
                <a href="/">
                  READ MORE
                  <i className="fas fa-arrow-right" />
                </a>{" "}
                .
              </p>
            </div>

            <div className="footer-item">
              <h3 className="footer-item-title">Contact</h3>
              <p>
                <i className="fas fa-building" /> 3755 Commercial St SE Salem,
                Corner with Sunny Boulevard, 3755 Commercial OR 97302
              </p>
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
              <p>
                <i className="fas fa-desktop" />
                https://yoururl.com
              </p>
            </div>

            <div className="footer-item">
              <h3 className="footer-item-title">Latest Listings</h3>
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
            </div>

            <div className="footer-item footer-search">
              <h3 className="footer-item-title">Search</h3>
              <input type="text" placeholder="Type Keyword" />
              <br />
              <button className="secondary-btn search-btn">Search</button>
            </div>
          </div>
          <div className="footer-buyerchoice">
            <nav>
              <p>Buyer's Choice</p>
              <div className="prvcy">
                <p className="first-ptag">Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
