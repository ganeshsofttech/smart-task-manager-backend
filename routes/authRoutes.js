const express = require("express");

const router = express.Router();

const controller = require("../controllers/authController");
const auth = require("../middleware/auth");
router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/getUser", auth, controller.getUser);

module.exports = router;