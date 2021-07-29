const Place = require("../models/Place");
const User = require("../models/User");

module.exports = {
  getAdminUsers(req, res) {
    User.find().exec((err, users) => {
      if (err) console.log("Get Admin User Error");
      console.log("Admin User", users);

      res.status(200).json({ users });
    });
  },

  createPlace(req, res) {
    console.log(req.body);
    const { name, description } = req.body;
    let newPlace = new Place({
      name,
      description,
    });
    newPlace.save();
    console.log(newPlace);
    res.status(200).json({ place: newPlace });
  },

  updatePlace(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    Place.findById(id).exec((err, place) => {
      if (err) console.log("Can't update place", err);

      place.name = name ? name : place.name;
      place.description = description ?? place.description;
      place.save();
      console.log(place);

      res.status(200).json({ place });
    });
  },

  deletePlace(req, res) {
    const { id } = req.params;
    Place.deleteOne({ _id: id }).exec((err, product) => {
      if (err) console.log("Delete Error", err);
      res.status(200).json({ place });
    });
  },
};
