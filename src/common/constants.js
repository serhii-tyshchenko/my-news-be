const fs = require('fs');

const rawdata = fs.readFileSync('./data/providers.json');

const PROVIDERS = JSON.parse(rawdata);

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
