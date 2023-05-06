const mongoose = require("mongoose");
const Game = require("../models/Game.js");

const getGames = async () => {
    return await Game.find({})
}

const getGameById = async (game_id) => {
    return await Game.findOne({
        _id: new mongoose.Types.ObjectId(game_id)
    })
}

module.exports = {
    getGames: getGames,
    getGameById: getGameById
}