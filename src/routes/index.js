const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the News API v.1.2.2!',
  })
);

module.exports = router;
