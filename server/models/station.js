var mongoose = require('mongoose');

var stationSchema = mongoose.Schema({
  title: String,
  code: String,
  loc: {
    type: [Number],
    index: '2d'
  },
});

var Station = mongoose.model('Station', stationSchema);

module.exports = Station;
