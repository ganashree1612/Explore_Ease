const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "place",
    required: true,
  },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  
});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
