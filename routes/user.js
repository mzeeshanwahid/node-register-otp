const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const user = await User.find().sort("name");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  user = await user.save();

  res.send(user);
});

router.get("/:phone", async (req, res) => {
  const user = await User.find({ phone: req.params.phone });

  if (!user || user.length == 0)
    return res.status(404).send("The user with the given phone was not found.");

  res.send(user);
});

module.exports = router;
