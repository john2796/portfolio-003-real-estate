const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: { type: String },
  retailLoc: { type: String },
  numberofpageview: { type: Number },
  tab: { stype: String },
  img: [
    {
      src: { type: String }
    }
  ],
  favorites: [],
  description: [
    {
      title: { type: String },
      desc: { type: String }
    }
  ],
  contact: [
    {
      tellnum: {
        type: Number
      },
      cellnum: {
        type: Number
      },
      email: {
        type: String
      },
      skype: {
        type: String
      }
    }
  ],
  address: [
    {
      address: {
        type: String
      },
      area: {
        type: String
      },
      state: {
        type: String
      },
      city: {
        type: String
      },
      zip: {
        type: String
      },
      country: {
        type: String
      }
    }
  ],
  details: [
    {
      propertyid: {
        type: Number
      },
      price: {
        type: Number
      },
      propertysize: {
        type: Number
      },
      propertylotsize: {
        type: Number
      },
      rooms: {
        type: Number
      },
      bathrooms: {
        type: Number
      },
      garages: {
        type: Number
      },
      deposit: {
        type: Number
      },
      structuretype: {
        type: String
      },
      floorsnum: {
        type: Number
      }
    }
  ],
  features: [
    {
      type: [String]
    }
  ],
  floorplans: [
    {
      size: { type: String },
      rooms: { type: String },
      baths: { type: String },
      price: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model("listing", ListingSchema);
