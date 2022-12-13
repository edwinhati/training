const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.hello);
router.get("/test", controller.test);
router.get("/test2/:params", controller.test2);
router.get("/calculate/:a/:b", controller.calculate);

module.exports = router;
