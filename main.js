const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("Hi");
})

app.get("/contact", (req, res) => {
    res.send("Contact infromation submitted successfully.");
})

.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
