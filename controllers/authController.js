const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { v4: uuid } = require("uuid");

const user = require("../models/login");
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await user.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuid(),

      name,

      email,

      password: hashedPassword,
    };

    const users1 = user.create(newUser);
    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);

      return res.status(400).json({
        errors: messages,
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const singleuser = await user.findOne({ email });

  if (!singleuser) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const match = await bcrypt.compare(password, singleuser.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: singleuser.id,
      role: singleuser.role,
      email: singleuser.email,
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "1h",
    },
  );

  res.json({
    message: "Login Successful",

    token,
  });
};
exports.getUser = async (req, res) => {
  const Allusers = await user.find();

  res.json(Allusers);
};
function saveUsersToDB(users) {
  const users1 = user.create(users);

  return users1;
}
