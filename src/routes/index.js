const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the News Rover API v.1.4.1!',
  })
);

module.exports = router;
