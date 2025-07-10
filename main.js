const port = 3000,
    express = require("express"),
    app = express();

/*
app.get("/", (req, res) => {
    res.send("Hi");
})

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`Request for ${veg}\n`);
})
*/

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successfull!\n");
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});


