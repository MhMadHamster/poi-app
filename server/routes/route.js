var router = require('express').Router();
var Route = require('../models/route');

/* GET /routes */
router.get('/', function(req, res) {
  route.find(function(err, routes) {
    if (!err) {
      return res.json(routes);
    } else {
      res.statusCode = 500;
      console.log("Error: " + err.message);
      return res.json({
        error: "Server error",
      });
    }
  });
});

/* POST /routes */
router.post('/', function(req, res) {
  route.create(req.body, function(err, post) {
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

/* GET /routes/:id */
router.get('/:id', function(req, res) {
  route.findById(req.params.id, function(err, post) {
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

/* PUT /routes/:id */
router.put('/:id', function(req, res) {
  route.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
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

/* DELETE /routes/:id */
router.delete('/:id', function(req, res) {
  route.findByIdAndRemove(req.params.id, function(err, post) {
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