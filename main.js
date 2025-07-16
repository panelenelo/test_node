const port = 3000,
    express = require("express"),
    app = express();
    homeController = require("./controllers/homeController");

/*

app.get("/", (req, res) => {
    res.send("Hi");
})

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`Request for ${veg}\n`);
})


app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hi<\h1>")
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successfull!\n");
});

app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
})
*/

function fob(req, res) {
    console.log(req.originalUrl);
    res.send('Mango');
}



app.get("/", homeController.sendHi);

app.get("/items/:vegetable", homeController.sendReqParam);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});


