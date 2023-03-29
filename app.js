const express = require('express');
const cors = require('cors');
const parse = require('./parcer');
const { decode } = require('html-entities');
const { PROVIDERS, DEFAULT_POST_LIMIT } = require('./src/common/constants');
const { getProviderUrl } = require('./src/common/utils');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/rss', async (req, res) => {
  const postLimit = req.query.limit || DEFAULT_POST_LIMIT;
  const provider = req.query.provider;
  const providerUrl = getProviderUrl(provider);
  if (!providerUrl) {
    res.status(400).send('Invalid provider');
    return;
  }
  const response = await parse(providerUrl);
  const data = response.items.slice(0, postLimit).map((item) => ({
    title: decode(item.title),
    link: item.link,
    created: item.created,
  }));
  res.json(data);
  res.end();
});

app.get('/providers', async (req, res) => {
  res.json(PROVIDERS);
  res.end();
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
