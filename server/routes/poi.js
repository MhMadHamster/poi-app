var router = require('express').Router();
var POI = require('../models/poi');

/* GET /POIs */
router.get('/', function(req, res) {
  POI.find(function(err, POIs) {
    if (!err) {
      return res.json(POIs);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* POST /POIs */
router.post('/', function(req, res) {
  POI.create(req.body, function(err, post) {
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

/* GET /POIs/:id */
router.get('/:id', function(req, res) {
  POI.findById(req.params.id, function(err, post) {
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

/* PUT /POIs/:id */
router.put('/:id', function(req, res) {
  POI.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
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

/* DELETE /POIs/:id */
router.delete('/:id', function(req, res) {
  POI.findByIdAndRemove(req.params.id, function(err, post) {
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