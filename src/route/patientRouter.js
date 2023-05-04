const express = require('express');
const { patientController } = require("../controller/index");
const router = express.Router();

router.get("/:id", patientController.search);
router.patch("/:id", patientController.update);
router.delete("/:id", patientController.del);
router.post("/", patientController.create);

module.exports = router;