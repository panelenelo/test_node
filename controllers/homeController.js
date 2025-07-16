

exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}

exports.sendHi = (req, res) => {
    console.log(req.url);
    res.send(`Hi Mango!`);
}
