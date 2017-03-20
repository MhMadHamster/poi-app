var mongoose = require('mongoose');
var Station = require('./models/station');
var Route = require('./models/route');
var POI = require('./models/poi');
var stationData = require('./data/stations').data;
var i, newEntry;

mongoose.connect('mongodb://localhost/poi_app');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected');
});

Station.collection.drop();

for (i = 0; i < 100; i += 1) {
  var lon = stationData[i][2].split(', ')[1];
  var lat = stationData[i][2].split(', ')[0];
  newEntry = new Station({
    title: stationData[i][0],
    code: stationData[i][1],
    loc: [lon, lat],
  });
  newEntry.save((err) => console.log(err));
}

db.close();
