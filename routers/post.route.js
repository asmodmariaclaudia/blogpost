const express = require("express")
const { Module } = require("module")

const router = express.Router()

router.get("/home", (req, res) => {
    res.send("Welcome!")
})

module.exports = router