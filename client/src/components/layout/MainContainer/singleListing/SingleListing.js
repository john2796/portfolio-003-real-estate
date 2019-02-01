import React, { Component, lazy, Suspense } from "react";
import uuid from "uuid";

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
        isopen: false,
        id: uuid(),
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
        isopen: false,
        id: uuid(),
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
    features: [
      {
        title: "Features",
        id: uuid(),
        isopen: false,
        ft: [
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
        ]
      }
    ],
    floorplan: [
      {
        id: uuid(),
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
    ],
    walkscore: [{ title: "WalkScore", id: uuid(), isopen: false }],
    map: [{ title: "Map", id: uuid(), isopen: false }]
  }
];

class SingleListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cdata
    };
  }
  toggle = id => {
    const { cdata } = this.state;
    const updatedCdata = [...cdata];
    updatedCdata.map(x => {
      if (x.address[0].id === id) {
        x.address[0].isopen = !x.address[0].isopen;
      } else if (x.details[0].id === id) {
        x.details[0].isopen = !x.details[0].isopen;
      } else if (x.features[0].id === id) {
        x.features[0].isopen = !x.features[0].isopen;
      } else if (x.walkscore[0].id === id) {
        x.walkscore[0].isopen = !x.walkscore[0].isopen;
      } else if (x.map[0].id === id) {
        x.map[0].isopen = !x.map[0].isopen;
      } else if (x.floorplan[0].id === id) {
        x.floorplan[0].isopen = !x.floorplan[0].isopen;
      }
      return x;
    });

    this.setState({ cdata: updatedCdata }, () => console.log(cdata));
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<h1>loading</h1>}>
          <Scarousel cdata={cdata} />
        </Suspense>
        <span className="pathname">need to add pathname here later </span>

        <div className="singlemain">
          {this.state.cdata.map((i, idx) => {
            console.log("data", i);
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
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.address[0].id)}
                    >
                      <h4 className="sl-items-title">{i.address[0].title}</h4>
                      {i.address[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}
                    </div>
                    <div
                      className={
                        i.address[0].isopen ? "ls-toggle-active" : null
                      }
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
                  <section className="details sl-white-box">
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.details[0].id)}
                    >
                      <h4 className="sl-items-title">{i.details[0].title}</h4>
                      {i.details[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}
                    </div>
                    <div
                      className={
                        i.details[0].isopen ? "ls-toggle-active" : null
                      }
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
                  <section className="features sl-white-box">
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.features[0].id)}
                    >
                      <h4 className="sl-items-title">{i.features[0].title}</h4>
                      {i.features[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}
                    </div>
                    <div
                      className={
                        i.features[0].isopen ? "ls-toggle-active" : null
                      }
                    >
                      <div className="feature-section">
                        {i.features[0].ft.map((feat, idx) => (
                          <p key={idx}>
                            <i className="fas fa-check" /> {feat}
                          </p>
                        ))}
                      </div>
                    </div>
                  </section>
                  {/* Map section */}
                  <section className="map sl-white-box">
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.map[0].id)}
                    >
                      <h4 className="sl-items-title">{i.map[0].title}</h4>
                      {i.map[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}
                    </div>
                    <div
                      className={i.map[0].isopen ? "ls-toggle-active" : null}
                    >
                      <div className="map-section">
                        load map here from api later
                      </div>
                    </div>
                  </section>
                  {/* Walkscore section */}
                  <section className="walkscore sl-white-box">
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.walkscore[0].id)}
                    >
                      <h4 className="sl-items-title">{i.walkscore[0].title}</h4>
                      {i.walkscore[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}{" "}
                    </div>
                    <div
                      className={
                        i.walkscore[0].isopen ? "ls-toggle-active" : null
                      }
                    >
                      <div className="walkscore-section">
                        <img
                          src="https://cdn.walk.sc/images/api-logo.png"
                          alt="walkscore"
                        />{" "}
                        <span>: 48 / Car-Dependent</span>
                        <a
                          className="walkscore-link"
                          href="https://www.walkscore.com/score/loc/lat=40.995597/lng=-74.3412895/?utm_source=wpestate.org&utm_medium=ws_api&utm_campaign=ws_api"
                        >
                          more details here
                        </a>
                      </div>
                    </div>
                  </section>
                  {/* Floor Plans section */}
                  <section className="floorplans sl-white-box">
                    <div
                      className="sl-item"
                      onClick={() => this.toggle(i.floorplan[0].id)}
                    >
                      <h4 className="sl-items-title">{i.floorplan[0].title}</h4>
                      {i.floorplan[0].isopen ? (
                        <i className="fas fa-angle-down" />
                      ) : (
                        <i className="fas fa-angle-up" />
                      )}
                    </div>
                    <div
                      className={
                        i.floorplan[0].isopen ? "ls-toggle-active" : null
                      }
                    >
                      <div className="floorplans-section">
                        <div className="floor-plan-row">
                          <p>{i.floorplan[0].titleA}</p>
                          <p>
                            <span>size:</span> {i.floorplan[0].sizeA}
                          </p>
                          <p>
                            <span>rooms:</span> {i.floorplan[0].roomsA}
                          </p>
                          <p>
                            <span>baths</span> {i.floorplan[0].bathsA}
                          </p>
                          <p>
                            <span>price</span> {i.floorplan[0].priceA}
                          </p>
                        </div>
                        <img
                          src={i.floorplan[0].img}
                          alt={i.floorplan[0].img}
                        />
                        <p className="floor-desc">{i.floorplan[0].desc}</p>
                        <div className="floor-plan-row">
                          <p>{i.floorplan[0].titleB}</p>
                          <p>
                            <span>size:</span> {i.floorplan[0].sizeB}
                          </p>
                          <p>
                            <span>rooms:</span> {i.floorplan[0].roomsB}
                          </p>
                          <p>
                            <span>baths</span> {i.floorplan[0].bathsB}
                          </p>
                          <p>
                            <span>price</span> {i.floorplan[0].priceB}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Property Reviews section */}
                  <section className="prop-review sl-white-box">
                    <h4 className="sl-items-title">Property Reviews</h4>
                    <p>
                      You need to <strong>login</strong> in order to post a
                      review
                    </p>
                  </section>
                  <section className="similar-listing">
                    <h3>Similar Listings</h3>
                    <p>will have to do simliar things json later</p>
                  </section>
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
