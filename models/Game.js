const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    description: { type: String },
    average_score: { type: Number },
    title: { type: String },
    year: { type: String },
    art: {type: String}
}) 

const Game = mongoose.model("Game", GameSchema)

module.exports = Game;