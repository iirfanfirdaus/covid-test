const mongoose = require("mongoose");

const covidSchema = new mongoose.Schema({
  tanggal: {
    type: String,
    required: true,
  },
  no_pasien: {
    type: String,
    required: true,
  },
  usia: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Covid", covidSchema);
