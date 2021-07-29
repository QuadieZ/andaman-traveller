const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  auth0_id: String,
});

module.exports = User = mongoose.model("User", UserSchema);
