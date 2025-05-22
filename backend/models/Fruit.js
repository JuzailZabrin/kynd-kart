const db = require("../config/db");

class Fruit {
  // Add a new fruit
  static create(fruit, callback) {
    const query = `
      INSERT INTO Fruits (donorId, fruitName, quantity, description)
      VALUES (?, ?, ?, ?)
    `;
    db.query(
      query,
      [fruit.donorId, fruit.fruitName, fruit.quantity, fruit.description],
      callback
    );
  }

  // List all fruits
  static getAll(callback) {
    const query = "SELECT * FROM Fruits";
    db.query(query, callback);
  }

  // Reserve a fruit
  static reserve(fruitId, recipientId, callback) {
    const query = `
      UPDATE Fruits
      SET status = 'reserved', recipientId = ?
      WHERE id = ?
    `;
    db.query(query, [recipientId, fruitId], callback);
  }

  //Update a fruit
  static update(id, updatedFruit, callback) {
    const query = `
      UPDATE Fruits
      SET fruitName = ?, quantity = ?, description = ?
      WHERE id = ?
    `;
    db.query(
      query,
      [
        updatedFruit.fruitName,
        updatedFruit.quantity,
        updatedFruit.description,
        id,
      ],
      callback
    );
  }

  //update fruit status
  static updateStatus(fruitName, status, recipientId, callback) {
    const query = `
      UPDATE Fruits
      SET status = ?, recipientId = ?
      WHERE fruitName = ? AND status = 'available'
    `;
    db.query(query, [status, recipientId, fruitName], callback);
  }

  //delete a fruit
  static delete(id, callback) {
    const query = "DELETE FROM Fruits WHERE id = ?";
    db.query(query, [id], callback);
  }
}

module.exports = Fruit;
