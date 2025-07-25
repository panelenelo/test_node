/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */


exports.showCourses = (req, res) => {
    res.render("courses");
}

exports.showSignUp = (req, res) => {
    res.render("contact");
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
}


/*
exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}\n`);
};

exports.sendHi = (req, res) => {
    console.log(req.url);
    res.send(`Hi Mango!\n`);
};

exports.userSignUpProcessor = (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.send(`POST done\n`);
};

exports.checkItems = (req, res, next) => {
    console.log("visited items.\n");
    next();
};

exports.respondWithName = (req, res) => {
    paramsName = req.params.idName;
    if(paramsName){
        res.render("index", {name: paramsName });
    } else{
        res.render("index", {name: "User" });
    }
};
*/