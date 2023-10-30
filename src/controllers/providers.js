const { PROVIDERS } = require('../common/constants');

module.exports = {
  list(req, res) {
    res.status(200).send(PROVIDERS).end();
  },
};
