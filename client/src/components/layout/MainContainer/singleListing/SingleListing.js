import React, { Component } from "react";
import SCarousel from "./SCarousel";

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
  render() {
    return (
      <React.Fragment>
        <SCarousel cdata={cdata} />
        <h1>main single page </h1>
      </React.Fragment>
    );
  }
}

export default SingleListing;
