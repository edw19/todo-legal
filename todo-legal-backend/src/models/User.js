const { Schema, model } = require("mongoose");

const schema = new Schema({
  status: {
    type: String,
    default: "ACTIVE",
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("user", schema);


module.exports = User;
