const express = require("express");
const requestController = require("../controllers/requestController");

const router = express.Router();

// Create a new fruit request
router.post("/", requestController.createRequest);

module.exports = router;
