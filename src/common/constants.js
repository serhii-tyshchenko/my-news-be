const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'users.json');
const rawdata = fs.readFileSync(filePath);

const PROVIDERS = JSON.parse(rawdata);

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
