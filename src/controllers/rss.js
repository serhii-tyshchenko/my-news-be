const parse = require('../parse');

const { DEFAULT_POST_LIMIT } = require('../common/constants');
const { getProviderUrl, transformData } = require('../common/utils');

module.exports = {
  async retrieve(req, res) {
    try {
      const postLimit = req.query.limit || DEFAULT_POST_LIMIT;
      const provider = req.query.provider;
      const providerUrl = getProviderUrl(provider);

      if (!providerUrl) {
        return res.status(400).json({ error: 'Invalid provider' });
      }

      const response = await parse(providerUrl);

      if (!response || !response.items) {
        return res.status(500).json({ error: 'Failed to fetch data' });
      }

      const data = transformData(response.items, postLimit);

      return res.status(200).json({
        data,
        count: response?.items.length || 0,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  },
};
