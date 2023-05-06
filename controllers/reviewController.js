const express = require("express");
const router = express.Router();
const reviewService = require('../services/reviewService.js')

router.get("/:review_id", async function (req, res) {
    const result = await reviewService.getReviewByReviewId(req.params.review_id)
    res.status(200).json(result)
});

router.get("/game/:game_id", async function (req, res) {
    const result = await reviewService.getReviewByGameId(req.params.game_id)
    res.status(200).json(result)
});

router.post("/", async function (req, res) {
    const result = await reviewService.createReview(req.body)
    res.send(result);
});

module.exports = router;