const Request = require("../models/Request");
const Fruit = require("../models/Fruit");

const createRequest = (req, res) => {
  const { recipientId, fruitName, quantity, description } = req.body;

  const newRequest = { recipientId, fruitName, quantity, description };

  Request.create(newRequest, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create request" });
    }

    // Update the fruit status to "reserved"
    Fruit.updateStatus(fruitName, "reserved", recipientId, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update fruit status" });
      }
      res
        .status(201)
        .json({
          message: "Fruit request created successfully",
          requestId: results.insertId,
        });
    });
  });
};

module.exports = { createRequest };
