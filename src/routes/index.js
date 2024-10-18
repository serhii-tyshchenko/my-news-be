const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the News Rover API v.1.3.0!',
  })
);

module.exports = router;
