const mongoose = require("mongoose");

module.exports = function() {
  const db = "mongodb://localhost/optusers";
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log(`Connected to ${db}...`));
};
