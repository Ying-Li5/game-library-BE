const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const mongoose = require('mongoose')

// MIDDLEWARE
app.use(express.json())

app.use(cors())

const gameController = require("./controllers/gameController")
const reviewController = require("./controllers/reviewController")
const userController = require("./controllers/userController")

app.use("/game", gameController)
app.use("/user", userController)
app.use("/review", reviewController)

mongoose.connect("mongodb://127.0.0.1/final-project", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;