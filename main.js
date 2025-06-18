const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("Hi");
})
.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
