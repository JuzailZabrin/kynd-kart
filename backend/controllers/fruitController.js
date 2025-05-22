const Fruit = require("../models/Fruit");

// Add a new fruit
const addFruit = (req, res) => {
  const { donorId, fruitName, quantity, description } = req.body;

  // Validate input
  if (!donorId || !fruitName || !quantity || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newFruit = { donorId, fruitName, quantity, description };

  Fruit.create(newFruit, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add fruit" });
    }
    res
      .status(201)
      .json({ message: "Fruit added successfully", fruitId: results.insertId });
  });
};

// List all fruits
const listFruits = (req, res) => {
  Fruit.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch fruits" });
    }
    res.status(200).json(results);
  });
};

// Reserve a fruit
const reserveFruit = (req, res) => {
  const fruitId = req.params.id; // Get the fruit ID from the URL
  const { recipientId } = req.body; // Get the recipient ID from the request body

  // Validate input
  if (!recipientId) {
    return res.status(400).json({ error: "Recipient ID is required" });
  }

  // Reserve the fruit
  Fruit.reserve(fruitId, recipientId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to reserve fruit" });
    }
    res.status(200).json({ message: "Fruit reserved successfully" });
  });
};

//  Update a fruit
const updateFruit = (req, res) => {
  const fruitId = req.params.id;
  const { fruitName, quantity, description } = req.body;

  const updatedFruit = { fruitName, quantity, description };

  Fruit.update(fruitId, updatedFruit, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to update fruit" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Fruit not found" });
    }
    res.status(200).json({ message: "Fruit updated successfully" });
  });
};

//delete a fruit
const deleteFruit = (req, res) => {
  const fruitId = req.params.id;

  Fruit.delete(fruitId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to delete fruit" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Fruit not found" });
    }
    res.status(200).json({ message: "Fruit deleted successfully" });
  });
};

// Export the functions
module.exports = {
  addFruit,
  listFruits,
  reserveFruit,
  updateFruit,
  deleteFruit,
};
