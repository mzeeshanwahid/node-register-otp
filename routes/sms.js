const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Integrate SMS API Here
  var number = parseInt(Math.random() * (10000 - 2000) + 2000); // generating a random number from 2000 to 10000
  res.status(200).send({ otp: number });
});

module.exports = router;
