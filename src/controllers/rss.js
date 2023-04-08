const parse = require('../parse');
const { decode } = require('html-entities');

const { DEFAULT_POST_LIMIT } = require('../common/constants');
const { getProviderUrl } = require('../common/utils');

module.exports = {
  async retrieve(req, res) {
    const postLimit = req.query.limit || DEFAULT_POST_LIMIT;
    const provider = req.query.provider;
    const providerUrl = getProviderUrl(provider);
    if (!providerUrl) {
      res.status(400).send('Invalid provider');
      return;
    }
    const response = await parse(providerUrl);
    const data = response.items.slice(0, postLimit).map((item) => ({
      title: decode(item.title).trim(),
      link: item.link,
      created: item.created,
      enclosures: item.enclosures,
    }));
    res.json(data);
    res.end();
  },
};
