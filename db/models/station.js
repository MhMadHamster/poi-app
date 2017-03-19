var mongoose = require('mongoose');

var stationSchema = mongoose.Schema({
  title: String,
  code: String,
  lat: Number,
  lon: Number
});

var Station = mongoose.model('Station', stationSchema);

module.exports = Station;
