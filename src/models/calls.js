const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  host: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  plataform: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  participants: {
    type: Array,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.models.calls || mongoose.model("calls", schema);
