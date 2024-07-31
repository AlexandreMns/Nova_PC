const User = require("../models/User");
const mongoose = require("mongoose");

const Register = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    const user = new User({
      name,
      email,
      password,
      age,
    });
    await user.save();
    console.log("Body " + JSON.stringify(req.body));
    return res.status(201).json({ user });
  } catch (err) {
    console.log("Body " + JSON.stringify(req.body));
    return res.status(400).json({ error: err });
  }
};

module.exports = { Register };
