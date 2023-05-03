const express = require('express');
const { userController } = require("../controller/index");
const router = express.Router();

router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;