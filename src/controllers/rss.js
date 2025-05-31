const parse = require('../parse');

const { transformData } = require('../common/utils');

module.exports = {
  async retrieve(req, res) {
    try {
      const postLimit = req.query.limit;
      const url = decodeURIComponent(req.query.url);

      const response = await parse(url);

      if (!response || !response.items) {
        return res.status(500).json({ error: 'Failed to fetch RSS feed' });
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
