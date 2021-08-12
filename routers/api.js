const fs = require("fs")
const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/movies", (req, res, next) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/data.json')))
    res.status(200).json({
        data,
        status: 200,
        textStatus: true,
        message: "success"
    })
})
module.exports = router