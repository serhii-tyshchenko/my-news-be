const express = require('express');
const cors = require('cors');
const { parse } = require('rss-to-json');
const {decode} = require ('html-entities');

const PROVIDER_TO_RSS_MAP = {
  'censor': 'https://static.censor.net/censornet/rss/rss_uk_news.xml',
  'lb': 'https://lb.ua/rss/ukr/news.xml',
  'pravda': 'https://www.pravda.com.ua/rss/view_news/',
  'nv': 'https://nv.ua/ukr/rss/all.xml',
  'unian': 'https://www.unian.net/export/rss2/archive/index.xml',
  'gordon': 'https://gordonua.com/export/rss2/all-news2.xml',
  'korrespondent': 'https://korrespondent.net/rss/all.xml',
  'tsn': 'https://tsn.ua/rss/all.xml',
  'ukrinform': 'https://www.ukrinform.ua/rss/all.xml',
  'zaxid': 'https://zaxid.net/rss/all.xml',
  'militarnyj': 'https://mil.in.ua/uk/news/feed/',
  'defence_ua': 'https://defence-ua.com/rss/feed.xml',
  'espreso': 'https://espreso.tv/rss',
};

const app = express();
app.use(express.json());
app.use(cors());

app.get('/rss', async (req, res) => {
  const postLimit = req.query.limit || 10;
  const provider = req.query.provider;
  const rss = await parse(PROVIDER_TO_RSS_MAP[provider]);
  const data = rss.items.slice(0, postLimit).map((item) => ({
    title: decode(item.title),
    link: item.link,
    created: item.created,
  }));
  res.json(data);
  res.end();
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);


