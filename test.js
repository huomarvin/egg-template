const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/admin", {
  useNewUrlParser: true,
  user: "root",
  pass: "example",
});

console.log(mongoose.connections)