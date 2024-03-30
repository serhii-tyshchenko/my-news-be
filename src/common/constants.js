const CATEGORY_ID = {
  NEWS: 'news',
  TECH: 'tech',
  SOFTWARE_DEVELOPMENT: 'software_development',
  SCIENCE: 'science',
  SPORT: 'sport',
  BUSINESS: 'business',
};

const LANGUAGE = {
  UK: 'uk',
  EN: 'en',
};

const PROVIDERS_NEWS = [
  {
    id: 'bbc_world',
    type: 'rss',
    name: 'BBC World',
    description:
      'The latest stories from the World section of the BBC News web site.',
    url: 'http://feeds.bbci.co.uk/news/world/rss.xml',
    homepage: 'https://www.bbc.com/news/world',
    logo: 'https://www.bbc.com/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.EN,
  },
];

const PROVIDERS_TECH = [
  {
    id: 'techradar',
    type: 'rss',
    name: 'TechRadar',
    description:
      'The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more',
    url: 'https://www.techradar.com/rss',
    homepage: 'https://www.techradar.com',
    logo: 'https://www.techradar.com/favicon.ico',
    category: CATEGORY_ID.TECH,
    language: LANGUAGE.EN,
  },
  {
    id: 'techcrunch',
    type: 'rss',
    name: 'TechCrunch',
    description:
      'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.com/feed/',
    homepage: 'https://techcrunch.com',
    logo: 'https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/favicon.png',
    category: CATEGORY_ID.TECH,
    language: LANGUAGE.EN,
  },
  {
    id: 'theverge',
    type: 'rss',
    name: 'The Verge',
    description:
      'The Verge covers the intersection of technology, science, art, and culture.',
    url: 'https://www.theverge.com/rss/index.xml',
    homepage: 'https://www.theverge.com',
    logo: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/10037647/verge_favicon.0.png',
    category: CATEGORY_ID.TECH,
    language: LANGUAGE.EN,
  },
  {
    id: 'wired',
    type: 'rss',
    name: 'Wired',
    description: 'Wired is where tomorrow is realized.',
    url: 'https://www.wired.com/feed/rss',
    homepage: 'https://www.wired.com',
    logo: 'https://www.wired.com/favicon.ico',
    category: CATEGORY_ID.TECH,
    language: LANGUAGE.EN,
  },
  {
    id: 'bbc_tech',
    type: 'rss',
    name: 'BBC Technology',
    description:
      'The latest BBC Technology News: breaking news and analysis on computing, the web, blogs, games, gadgets, social media, broadband and more.',
    url: 'http://feeds.bbci.co.uk/news/technology/rss.xml',
    homepage: 'http://feeds.bbci.co.uk/news/technology/rss.xml',
    logo: 'https://www.bbc.com/favicon.ico',
    category: CATEGORY_ID.TECH,
    language: LANGUAGE.EN,
  },
];

const PROVIDERS_SOFTWARE_DEVELOPMENT = [
  {
    id: 'devto',
    type: 'rss',
    name: 'DEV Community',
    description:
      'A constructive and inclusive social network for software developers. With you every step of your journey.',
    url: 'https://dev.to/feed',
    homepage: 'https://dev.to',
    logo: 'https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png',
    category: CATEGORY_ID.SOFTWARE_DEVELOPMENT,
    language: LANGUAGE.EN,
  },
  {
    id: 'freecodecamp',
    type: 'rss',
    name: 'freeCodeCamp',
    description:
      'Learn to code at home. Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
    url: 'https://www.freecodecamp.org/news/rss/',
    homepage: 'https://www.freecodecamp.org',
    logo: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
    category: CATEGORY_ID.SOFTWARE_DEVELOPMENT,
    language: LANGUAGE.EN,
  },
];

const PROVIDERS_BUSINESS = [
  {
    id: 'bbc_business',
    type: 'rss',
    name: 'BBC Business',
    description:
      'The latest BBC Business News: breaking personal finance, company, financial and economic news, plus insight and analysis into UK and global markets.',
    url: 'http://feeds.bbci.co.uk/news/business/rss.xml',
    homepage: 'https://www.bbc.com/news/business',
    logo: 'https://www.bbc.com/favicon.ico',
    category: CATEGORY_ID.BUSINESS,
    language: LANGUAGE.EN,
  },
];

const PROVIDERS_SCIENCE = [
  {
    id: 'bbc_science',
    type: 'rss',
    name: 'BBC Science',
    description:
      'The latest BBC Science and Environment News: breaking news, analysis and debate on science and nature in the UK and around the world.',
    url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/sci/tech/rss.xml',
    homepage: 'https://www.bbc.com/news/science_and_environment',
    logo: 'https://www.bbc.com/favicon.ico',
    category: CATEGORY_ID.SCIENCE,
    language: LANGUAGE.EN,
  },
  {
    id: 'spacecom',
    type: 'rss',
    name: 'Space.com',
    description:
      'Space.com is where humanity’s journey to new and exciting worlds is transmitted back down to Earth. Where we vicariously explore the cosmos with astronauts, ...',
    url: 'https://www.space.com/feeds/all',
    homepage: 'https://www.space.com',
    logo: 'https://www.space.com/favicon.ico',
    category: CATEGORY_ID.SCIENCE,
    language: LANGUAGE.EN,
  },
];

const PROVIDERS = [
  ...PROVIDERS_NEWS,
  ...PROVIDERS_TECH,
  ...PROVIDERS_SOFTWARE_DEVELOPMENT,
  ...PROVIDERS_BUSINESS,
  ...PROVIDERS_SCIENCE,
];

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
