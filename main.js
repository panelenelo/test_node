const port = 3000,
    express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts"),
    routesMap = new Map();

app.set("view engine", "ejs");
app.use(layouts);
app.use(errorController.logErrors);
app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

/*
app.get("/", homeController.sendHi);
app.use("/items", homeController.checkItems);
app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/sign_up", homeController.userSignUpProcessor);
app.get("/name", homeController.respondWithName);
app.get("/name/:idName", homeController.respondWithName);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);
*/

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});


