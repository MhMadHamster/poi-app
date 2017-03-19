var mongoose = require('mongoose');
var Station = require('./models/station');
var Route = require('./models/route');
var POI = require('./models/poi');

mongoose.connect('mongodb://localhost/poi_app');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('connected');
});

mongoose.connection.db.createCollection(Route, (err) => console.log(err));

db.close();
