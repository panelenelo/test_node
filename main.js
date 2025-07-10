const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("Hi");
})

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`Request for ${veg}\n`);
})

.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
