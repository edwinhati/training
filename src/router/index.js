const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/test", (req, res) => {
  res.send("Hello Test");
});
router.get("/test2", (req, res) => {
  res.send("Hello Test2");
});

module.exports = router;
