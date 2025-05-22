const express = require("express");
const fruitController = require("../controllers/fruitController");

const router = express.Router();

// Add a new fruit
router.post("/", fruitController.addFruit);

// List all fruits
router.get("/", fruitController.listFruits);

// Reserve a fruit
router.put("/reserve/:id", fruitController.reserveFruit);

//Upate a fruit
router.put("/:id", fruitController.updateFruit);

//delete apruit
router.delete("/:id", fruitController.deleteFruit);

module.exports = router;
