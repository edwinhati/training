const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.hello);
router.get("/test", controller.test);

module.exports = router;
