const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    username: { type: String },
    score: { type: Number },
    game_id: { type: String },
    title: { type: String },
    content: { type: String },
    createdAt: { type: Date },
}) 

const Review = mongoose.model("Review", ReviewSchema)

module.exports = Review;