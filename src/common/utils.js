const { PROVIDERS } = require('./constants');

const getProviderUrl = (provider) =>
  PROVIDERS.find((item) => item.id === provider)?.url;

module.exports = {
  getProviderUrl,
};
