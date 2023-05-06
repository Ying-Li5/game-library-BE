const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("GET - User Information")
});

router.post("/", function (req, res) {
    res.send("POST - Create User");
});

router.post("/login", function (req, res) { 
    res.send("POST - Try to log user in")
});

router.post("/update-password", function (req, res) { 
    res.send("POST - Forgot Password Flow")
});

module.exports = router;