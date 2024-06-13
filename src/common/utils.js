const { decode } = require('html-entities');

const { PROVIDERS } = require('./constants');

const getProviderUrl = (provider) =>
  PROVIDERS.find((item) => item.id === provider)?.url;

const transformData = (items, limit) => {
  return items.slice(0, limit).map(({ title, link, created, enclosures }) => ({
    title: decode(title).trim(),
    link,
    created,
    enclosures,
  }));
};

module.exports = {
  getProviderUrl,
  transformData,
};
