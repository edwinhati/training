exports.hello = (req, res) => {
    res.send("Hellow World");
};
exports.test = (req, res) => {
    res.send("Hello Test");
}
exports.test2 = (req, res) => {
    const params = req.params.params;
    res.json({
        params
    });
};
exports.calculate = (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const result = parseInt(a) + parseInt(b);
    res.json({
        result
    });
};