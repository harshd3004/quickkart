const express = require("express");
const port = 5000;
const app = express();


app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});