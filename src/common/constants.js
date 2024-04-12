const CATEGORY_ID = {
  NEWS: 'news',
  TECH: 'tech',
  SOFTWARE_DEVELOPMENT: 'software_development',
  SCIENCE: 'science',
  MILITARY: 'military',
  SPORT: 'sport',
  BUSINESS: 'business',
};

const LANGUAGE = {
  UK: 'uk',
  RU: 'ru',
  EN: 'en',
};

const PROVIDERS_NEWS = [
  {
    id: 'censor',
    type: 'rss',
    name: 'Цензор.НЕТ',
    description:
      'Найсвіжіші огляди головних подій, резонансні статті, все про війну в Україні, авторські думки, фото та відео з місця подій, бізнес, розваги, політика, спорт.',
    url: 'https://static.censor.net/censornet/rss/rss_uk_news.xml',
    homepage: 'https://censor.net.ua',
    logo: 'https://static.censor.net/censornet_mobile/images/logo/uk/favicon-bg.svg',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'lb',
    type: 'rss',
    name: 'Lb.ua',
    description: 'Лівий берег – останні новини дня в Україні та світі.',
    url: 'https://lb.ua/rss/ukr/news.xml',
    homepage: 'https://lb.ua',
    logo: 'https://lb.ua/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'nv',
    type: 'rss',
    name: 'НВ',
    description:
      'Останні новини України та світу онлайн. Свіжі українські та світові новини політики, бізнесу, фінансів, технологій, стилю, спорту і важливих подій.',
    url: 'https://nv.ua/ukr/rss/all.xml',
    homepage: 'https://nv.ua',
    logo: 'https://nv.ua/favicon/android-icon-36x36.png?new',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'espreso',
    type: 'rss',
    name: 'Еспресо',
    description:
      'Найважливіші новини дня, свіжа інформація про війну з Росією, події на фронті...',
    url: 'https://espreso.tv/rss',
    homepage: 'https://espreso.tv',
    logo: 'https://espreso.tv/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'radiosvoboda',
    type: 'rss',
    name: 'Радіо Свобода',
    description: 'Сайт новин України та світу, відео, репортажів та аналітики.',
    url: 'https://www.radiosvoboda.org/api/zrqiteuuir',
    homepage: 'https://www.radiosvoboda.org',
    logo: 'https://www.radiosvoboda.org/Content/responsive/RFE/img/webApp/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'unian',
    type: 'rss',
    name: 'УНІАН',
    description:
      'Новини політики, економіки, свіжі новини спорту, новини України та світу цілодобово українською мовою від УНІАН.',
    url: 'https://rss.unian.net/site/news_ukr.rss',
    homepage: 'https://www.unian.ua',
    logo: 'https://www.unian.ua/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'obozrevatel',
    type: 'rss',
    name: 'Обозреватель',
    description: 'Найсвіжіші новини України та світу онлайн.',
    url: 'https://www.obozrevatel.com/ukr/out/rss/lastnews.xml',
    homepage: 'https://www.obozrevatel.com',
    logo: 'https://cdn.obozrevatel.com/news/img/favicons/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'liga',
    type: 'rss',
    name: 'Ліга.net',
    description:
      'Війна Росії проти України: онлайн-хроніка, останні події на Донбасі. Головні новини України та світу на сайті ЛІГА.net',
    url: 'https://www.liga.net/news/all/rss.xml',
    homepage: 'https://www.liga.net',
    logo: 'https://www.liga.net/design/images/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.RU,
  },
  {
    id: 'rbc',
    type: 'rss',
    name: 'РБК-Україна',
    description:
      "Головні новини України та світу сьогодні, політичні та аналітичні статті, новини економіки та курси валют, інтерв'ю, точки зору, новини життя на порталі РБК-Україна.",
    url: 'https://www.rbc.ua/static/rss/all.ukr.rss.xml',
    homepage: 'https://www.rbc.ua',
    logo: 'https://www.rbc.ua/static/news/imgs/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'gordon',
    type: 'rss',
    name: 'Гордон',
    description:
      'Головні новини України і світу, ексклюзивні коментарі, аналітика.',
    url: 'https://gordonua.com/ukr/xml/rss_category/politics.html',
    homepage: 'https://gordonua.com',
    logo: 'https://gordonua.com/favicon.ico',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
  {
    id: 'tsn',
    type: 'rss',
    name: 'ТСН',
    description:
      'Всі новини за останню добу. Найактуальніші новини 1+1 онлайн, політики, економіки, стилю та спорту на TSN.ua',
    url: 'https://tsn.ua/rss/full.rss',
    homepage: 'https://tsn.ua',
    logo: 'https://tsn.ua/favicon.svg',
    category: CATEGORY_ID.NEWS,
    language: LANGUAGE.UK,
  },
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

const PROVIDERS_MILITARY = [
  {
    id: 'armyinform',
    type: 'rss',
    name: 'АрміяInform',
    description: 'Інформаційне агентство АрміяInform',
    url: 'https://armyinform.com.ua/feed/',
    homepage: 'https://armyinform.com.ua',
    logo: 'https://armyinform.com.ua/favicon.ico',
    category: CATEGORY_ID.MILITARY,
    language: LANGUAGE.UK,
  },
  {
    id: 'militarnyj',
    type: 'rss',
    name: 'Мілітарний портал',
    description: 'Чесно про армію, війну та оборонку з 2009 року',
    url: 'https://mil.in.ua/uk/news/feed/',
    homepage: 'https://mil.in.ua',
    logo: 'https://mil.in.ua/wp-content/themes/military/favicon.png',
    category: CATEGORY_ID.MILITARY,
    language: LANGUAGE.UK,
  },
  {
    id: 'defense_express',
    type: 'rss',
    name: 'Defense Express',
    description:
      'Добірка найсвіжіших новин та аналітики по військовій тематиці. Статті експертів, описи озброєнь та багато іншого.',
    url: 'https://defence-ua.com/rss/feed.xml',
    homepage: 'https://defence-ua.com',
    logo: 'https://defence-ua.com/images/favicon.png',
    category: CATEGORY_ID.MILITARY,
    language: LANGUAGE.UK,
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
    id: 'dou',
    type: 'rss',
    name: 'DOU',
    description:
      'Новини, статті, дайджести, блоги, тренди, форум – для всіх, хто цікавиться розробкою програмного забезпечення.',
    url: 'https://dou.ua/feed/',
    homepage: 'https://dou.ua',
    logo: 'https://s.dou.ua/assets/img/icon.png',
    category: CATEGORY_ID.SOFTWARE_DEVELOPMENT,
    language: LANGUAGE.UK,
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
    id: 'censor_business',
    type: 'rss',
    name: 'Бізнес.Цензор',
    description: 'Найсвіжіші новини про бізнес та економіку',
    url: 'https://static.censor.net/biz/rss/rss_uk_news.xml',
    homepage: 'https://biz.censor.net',
    logo: 'https://static.censor.net/biz/images/logo/uk/favicon-bg.svg',
    category: CATEGORY_ID.BUSINESS,
    language: LANGUAGE.UK,
  },
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
  ...PROVIDERS_MILITARY,
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
