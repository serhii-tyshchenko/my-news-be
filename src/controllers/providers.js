const { getProviders, searchProviders } = require('../services/db');

module.exports = {
  async list(req, res) {
    try {
      const { search } = req.query;
      const data = search
        ? await searchProviders(search)
        : await getProviders();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  },
};
