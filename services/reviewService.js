const mongoose = require("mongoose")
const Review = require("../models/Review.js")

const getReviewByReviewId = async (review_id) => {
    return await Review.findOne({
        _id: new mongoose.Types.ObjectId(review_id)
    })
}

const getReviewByGameId = async (game_id) => {
    return await Review.find({
        game_id: game_id
    })
}

const createReview = async (review) => {
    return await Review.create(review)
}

module.exports = {
    getReviewByReviewId: getReviewByReviewId,
    getReviewByGameId: getReviewByGameId,
    createReview: createReview
}