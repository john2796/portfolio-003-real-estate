import React, { Component, lazy, Suspense } from "react";
const Scarousel = lazy(() => import("./SCarousel"));

const cdata = [
  {
    title: "Boutique Space Greenville",
    tprice: "$800",
    tretail: "Retail in Rentals",
    taddress: "Bartholdi Ave, Long Beach, Belmont",
    desctitle: "Description",
    desc:
      "Downtown Frederick hot spot. Top location for local entertainment. All fixtures are included. Liquor license can be included. Price includes 3 leased apartments on the second floor income $2,200 per month. Free standing built out restaurant with separate dining/banquet room. Spacious outdoor dining deck. Large commercial kitchen fully equipped. Seating capacity over 200 with large event area with stage and movable dance floor. This opportunity is perfect for investor or owner operator. Keep existing concept or introduce your own.",
    address: [
      {
        title: "Address",
        address: "Bartholdi Ave",
        city: "Long Beach",
        area: "Belmont",
        statecounty: "East California",
        zip: 3005,
        country: "United States"
      }
    ],
    details: [
      {
        title: "Details",
        propid: 160,
        price: "$800",
        propsz: "5 000,00 ft2",
        proplts: "1 000,00ft2",
        rms: 5,
        btrm: 4,
        grgs: 10,
        dep: "10%",
        stctype: "Brick",
        foornum: 1
      }
    ],
    images: [
      "https://losangeles.wpresidence.net/wp-content/uploads/2016/03/city_9-1-525x328.jpg",
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter1013-525x328.jpg",
      "https://losangeles.wpresidence.net/wp-content/uploads/2014/05/WPEstateImageAfter0913-525x328.jpg"
    ],
    feattitle: "Features",
    features: [
      "ocean view",
      "basketball court",
      "gym",
      "pound",
      "pool ",
      "fenced yard",
      "sprinklers",
      "washer and dryer",
      "deck",
      "balcony",
      "laundry",
      "concierge",
      "doorman",
      "private space",
      "storage"
    ],
    floorplan: [
      {
        title: "Floor Plans",
        titleA: "Floor Plan A",
        sizeA: "150 ft2",
        roomsA: "2",
        bathsA: "1",
        priceA: "$1,500",
        titleB: "Floor Plan B",
        sizeB: "150 ft2",
        roomsB: "5",
        bathsB: "2",
        priceB: "$2,000",
        img:
          "https://losangeles.wpresidence.net/wp-content/uploads/2018/03/floor-plan-3.jpg",
        desc:
          "Inside this enchanting home, the great room enjoys a fireplace and views of the rear patio. The secluded master suite at the front of the home delights in tons of natural light, a splendid bath, a sitting room with a fireplace, and a private lanai. Three upper-level bedrooms share an optional bonus room, perfect for a home gym, playroom, or studio. Click the home to see the layout!"
      }
    ]
  }
];

class SingleListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState((state, props) => {
      return { isOpen: !state.isOpen };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<h1>loading</h1>}>
          <Scarousel cdata={cdata} />
        </Suspense>
        <span className="pathname">need to add pathname here later </span>

        <div className="singlemain">
          {cdata.map((i, idx) => {
            console.log(i);
            return (
              //parent wrapper
              <div key={idx} className="twosection-parent">
                {/* left Section */}
                <div className="tsc-first-item">
                  {/* title section */}
                  <section className="title-section">
                    <div className="tandp">
                      <h1>{i.title}</h1>
                      <p>{i.tprice}</p>
                    </div>
                    <div className="title-lighthr">
                      <div className="retail">
                        <p>{i.tretail}</p>
                        <p className="add-fav">add to favorites</p>
                      </div>
                      <div className="taddress">
                        <p>{i.taddress}</p>
                        <p>
                          <span>
                            <i className="fas fa-eye-slash" />
                            <span>2133</span>
                          </span>
                          <span>
                            <i className="fab fa-facebook-f" />
                          </span>
                          <span>
                            <i className="fab fa-twitter" />
                          </span>
                          <span>
                            <i className="fab fa-google-plus-g" />
                          </span>
                          <span>
                            <i className="fab fa-pinterest" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* description section */}
                  <section className="description sl-white-box">
                    <h4 className="sl-title">{i.desctitle}</h4>
                    <p className="sl-ptag">{i.desc}</p>
                  </section>
                  {/* Address section */}
                  <section className="address sl-white-box">
                    <div className="sl-item" onClick={this.toggle}>
                      <h4 className="sl-items-title">{i.address[0].title}</h4>
                      <i className="fas fa-angle-down" />
                    </div>
                    <div
                      className={this.state.isOpen ? "ls-toggle-active" : null}
                    >
                      <div className="ls-address-info">
                        <p>
                          <strong>Address</strong>: {i.address[0].address}
                        </p>
                        <p>
                          <strong>City</strong>: {i.address[0].city}
                        </p>
                        <p>
                          <strong>Area</strong>: {i.address[0].area}
                        </p>
                        <p>
                          <strong>State/Country</strong>:{" "}
                          {i.address[0].statecounty}
                        </p>
                        <p>
                          <strong>Zip</strong>: {i.address[0].zip}
                        </p>
                        <p>
                          <strong>Country</strong>: {i.address[0].country}
                        </p>
                      </div>
                      <p className="add-fav add-fav-yellow">
                        Open In Google Maps
                      </p>
                    </div>
                  </section>
                  {/* details section */}
                  <section className="address sl-white-box">
                    <div className="sl-item" onClick={this.toggle}>
                      <h4 className="sl-items-title">{i.details[0].title}</h4>
                      <i className="fas fa-angle-down" />
                    </div>
                    <div
                      className={this.state.isOpen ? "ls-toggle-active" : null}
                    >
                      <div className="ls-address-info">
                        <p>
                          <strong>Property Id</strong>: {i.details[0].propid}
                        </p>
                        <p>
                          <strong>Price</strong>: {i.details[0].price}
                        </p>
                        <p>
                          <strong>Property Size</strong>: {i.details[0].propsz}
                        </p>
                        <p>
                          <strong>Property Lot Size</strong>:{" "}
                          {i.details[0].proplts}
                        </p>
                        <p>
                          <strong>Rooms</strong>: {i.details[0].rms}
                        </p>
                        <p>
                          <strong>Bathroom</strong>: {i.details[0].btrm}
                        </p>
                        <p>
                          <strong>Garages</strong>: {i.details[0].grgs}
                        </p>
                        <p>
                          <strong>Deposit</strong>: {i.details[0].dep}
                        </p>
                        <p>
                          <strong>Structure Type</strong>:{" "}
                          {i.details[0].stctype}
                        </p>
                        <p>
                          <strong>Floors No</strong>: {i.details[0].foornum}
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Features section */}
                  {/* Map section */}
                  {/* Floor Plans section */}
                  {/* Page View Statistics section */}
                  {/* Property Reviews section */}
                </div>

                {/* Right Section */}
                <div className="tsc-second-item">
                  <h3>Michael Suttherland</h3>
                  <p>will work on here after i finished left section</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SingleListing;
