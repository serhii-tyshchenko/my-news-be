const parse = require('../parse');

const { DEFAULT_POST_LIMIT } = require('../common/constants');
const { transformData } = require('../common/utils');

module.exports = {
  async retrieve(req, res) {
    try {
      const postLimit = req.query.limit || DEFAULT_POST_LIMIT;
      const url = req.query.url;

      const response = await parse(url);

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
