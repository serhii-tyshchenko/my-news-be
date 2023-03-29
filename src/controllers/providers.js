const { PROVIDERS } = require('../common/constants');

module.exports = {
  list(req, res) {
    res.json(PROVIDERS);
    res.end();
  },
};
