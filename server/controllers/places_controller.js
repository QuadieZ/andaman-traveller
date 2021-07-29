const Place = require("../models/Place");

module.exports = {
  readAllPlaces(req, res) {
    Place.find({}).exec((err, places) => {
      if (err) console.log("Get Places Error", err);

      console.log("places", places);
      res.status(200).send(places);
    });
  },

  readPlace(req, res) {
    const { id } = req.params;
    Place.findById(id).exec((err, place) => {
      if (err) console.log("Get Single Place Error", err);
      console.log("Place", place);
      res.status(200).json({ place });
    });
  },
};
