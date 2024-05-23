const mongoose = require("mongoose");
const placesSchema = mongoose.Schema({
  name: {
    type: String,
  },
});
const placesModel = mongoose.model("place", placesSchema);
module.exports = placesModel;
