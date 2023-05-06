const Review = require("../models/Review.js")
const mongoose = require("mongoose")

async function seed() {
  mongoose.connect("mongodb://127.0.0.1/final-project", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

  const review1 = await new Review({
    username: "Shorgi",
    score: 8,
    game_id: "6452dc52d5a54c84c76d3e6c",
    title: "This game made my life harder...I love it!",
    content: "Peh",
    createdAt: new Date()
  }).save()

  const review2 = await new Review({
    username: "Florgi",
    score: 5,
    game_id: "6452dc52d5a54c84c76d3e6c",
    title: "Easier than a fulltime Job",
    content: "It's like having a fulltime job! I worry about it constantly and can't sleep at night",
    createdAt: new Date()
  }).save()

  const review3 = await new Review({
    username: "Corgi",
    score: 4,
    game_id: "6452dc52d5a54c84c76d3e6c",
    title: "Ying hates it i love it",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: new Date()
  }).save()
}

seed()