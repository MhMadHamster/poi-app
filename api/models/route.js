var mongoose = require('mongoose');

var routeSchema = mongoose.Schema({
  origin: String,
  destination: String,
  time: Number,
  price: Number
});

var Route = mongoose.model('Route', routeSchema);

module.exports = Route;
