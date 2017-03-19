var mongoose = require('mongoose');

var poiSchema = mongoose.Schema({
  title: String,
  instagram_code: String,
  rating: Number,
  station: String,
  lat: Number,
  lon: Number
});

var POI = mongoose.model('POI', poiSchema);

module.exports = POI;
