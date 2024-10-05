const express = require("express")
const router = require("./routers/post.route.js")
const { Server } = require("http")

const app = express()

//register
app.use(router)

//server
app.listen(4000, () => {
    console.log("Server Started!")
})