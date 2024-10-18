const { decode } = require('html-entities');

const { PROVIDERS } = require('./constants');

const getProviderUrl = (provider) =>
  PROVIDERS.find((item) => item.id === provider)?.url;

const transformData = (items, limit) => {
  return items
    .slice(0, limit)
    .map(({ title, link, created, enclosures, description }) => ({
      title: decode(title).trim(),
      link,
      created,
      enclosures,
      description: decode(description).trim().replaceAll('\n', ''),
    }));
};

module.exports = {
  getProviderUrl,
  transformData,
};
