const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the News API v.1.1.3!',
  })
);

module.exports = router;
