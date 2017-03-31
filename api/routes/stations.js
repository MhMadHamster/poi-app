var router = require('express').Router();
var Station = require('../models/station');

/* GET /stations */
router.get('/', function(req, res) {
  return Station.find(function(err, stations) {
    if (!err) {
      return res.json(stations);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* POST /stations */
router.post('/', function(req, res) {
  return Station.create(req.body, function(err, post) {
    if (!err) {
      return res.json(post);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* GET /stations/:id */
router.get('/:id', function(req, res) {
  return Station.findById(req.params.id, function(err, post) {
    if (!err) {
      return res.json(post);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* PUT /stations/:id */
router.put('/:id', function(req, res) {
  return Station.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (!err) {
      return res.json(post);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* DELETE /stations/:id */
router.delete('/:id', function(req, res) {
  return Station.findByIdAndRemove(req.params.id, function(err, post) {
    if (!err) {
      return res.json(post);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

export default router;