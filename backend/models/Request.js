const db = require("../config/db");

class Request {
  static create(request, callback) {
    const query = `
      INSERT INTO Requests (recipientId, fruitName, quantity, description)
      VALUES (?, ?, ?, ?)
    `;
    db.query(
      query,
      [
        request.recipientId,
        request.fruitName,
        request.quantity,
        request.description,
      ],
      callback
    );
  }
}

module.exports = Request;
