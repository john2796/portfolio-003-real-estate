const express = require("express");
const router = express.Router();

const Listing = require("../../models/Listing");

router.get("/", (req, res) => {
  Listing.find()
    .then(listing => {
      if (!listing) {
        errors.nodata = "There is no data";
        return res.status(404).json(errors);
      }
      res.json(listing);
    })
    .catch(err => res.status(404).json({ errors: err }));
});

router.post("/", (req, res) => {
  const listingFields = {};
  if (!req.body.title) {
    return res.json({ msg: "field is required" });
  }
  if (req.body.title) listingFields.title = req.body.title;
  new Listing(listingFields)
    .save()
    .then(listing => res.json(listing))
    .catch(err => res.send(err));
});

module.exports = router;
