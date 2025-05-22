const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Ensure this line is correct
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const {
    name,
    email,
    password,
    role,
    phone,
    street,
    city,
    state,
    zipCode,
    lat,
    lng,
  } = req.body;

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    role,
    phone,
    street,
    city,
    state,
    zipCode,
    lat,
    lng,
  };

  User.create(newUser, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Registration failed" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
  });
};

module.exports = { register, login };
