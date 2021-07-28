const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  rating: Number,
});

module.exports = mongoose.model("Place", PlaceSchema);
