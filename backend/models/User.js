const db = require("../config/db");

class User {
  static create(user, callback) {
    const query = `
      INSERT INTO Users (name, email, password, role, phone, street, city, state, zipCode, lat, lng)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      query,
      [
        user.name,
        user.email,
        user.password,
        user.role,
        user.phone,
        user.street,
        user.city,
        user.state,
        user.zipCode,
        user.lat,
        user.lng,
      ],
      callback
    );
  }

  static findByEmail(email, callback) {
    const query = "SELECT * FROM Users WHERE email = ?";
    db.query(query, [email], callback);
  }
}

module.exports = User;
