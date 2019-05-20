const express = require("express");
const users = require("../routes/user");
const sms = require("../routes/sms");

module.exports = function(app) {
  app.use(express.json());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/api/users", users);
  app.use("/api/sendSMS", sms);
};
