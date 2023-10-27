const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.use('/', express.static('public'))

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080")
})