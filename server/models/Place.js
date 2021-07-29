const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
  {
    name: String,
    description: String,
    rating: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Place", PlaceSchema);
