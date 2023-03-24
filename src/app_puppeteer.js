const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const { parse } = require('rss-to-json');

const PROVIDERS = {
  CENSOR: {
    endpoint: '/censor',
    url: 'https://m.censor.net/ua/news/all',
  },
  LB: {
    endpoint: '/lb',
    url: 'https://lb.ua',
  },
};

const app = express();
app.use(express.json());
app.use(cors());

app.get(PROVIDERS.CENSOR.endpoint, async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(PROVIDERS.CENSOR.url);
  const newsBlockSelector = await page.waitForSelector('.left ul');
  const postLimit = req.query.limit || 10;

  const news = await newsBlockSelector.$$eval('li', (lis) => {
    return lis.map((li) => ({
      title: li.querySelector('.item-right a h3').textContent.trim(),
      link: li.querySelector('.item-right a').href,
      time: li.querySelector('.item-right a time').textContent,
    }));
  });

  await browser.close();

  res.json(news.slice(0, postLimit));
  res.end();
});

app.get(PROVIDERS.LB.endpoint, async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(PROVIDERS.LB.url);
  const postLimit = req.query.limit || 10;
  const newsBlock = await page.waitForSelector('.feed.feed-main:last-of-type');

  const news = await newsBlock.$$eval('li', (lis) => {
    return lis
      .filter(
        (li) =>
          (!li.classList.contains('split-time') && !li.classList.contains('adv-block'))
      )
      .map((li) => ({
        title: li.querySelector('a')?.textContent.trim(),
        link: li.querySelector('a')?.href,
        time: li.querySelector('a time')?.textContent.trim(),
      }));
  });

  await browser.close();

  res.json(news.slice(0, postLimit));
  res.end();
});

const PORT = process.env.PORT || 4000;

// async await
(async () => {

  var rss = await parse('https://www.pravda.com.ua/rss/view_news/');

  console.log('111', JSON.stringify(rss, null, 3));

})();

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);


