const PROVIDERS = [
  {
    id: 'censor',
    type: 'rss',
    name: 'Цензор.НЕТ',
    description:
      'Найсвіжіші огляди головних подій, резонансні статті, все про війну в Україні, авторські думки, фото та відео з місця подій, бізнес, розваги, політика, спорт.',
    url: 'https://static.censor.net/censornet/rss/rss_uk_news.xml',
    homepage: 'https://censor.net.ua',
    logo: 'https://static.censor.net/censornet_mobile/images/logo/uk/favicon-bg.svg',
  },
  {
    id: 'lb',
    type: 'rss',
    name: 'Lb.ua',
    description: 'Лівий берег – останні новини дня в Україні та світі.',
    url: 'https://lb.ua/rss/ukr/news.xml',
    homepage: 'https://lb.ua',
    logo: 'https://lb.ua/favicon.ico',
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
  },
  {
    id: 'radiosvoboda',
    type: 'rss',
    name: 'Радіо Свобода',
    description: 'Сайт новин України та світу, відео, репортажів та аналітики.',
    url: 'https://www.radiosvoboda.org/api/zrqiteuuir',
    homepage: 'https://www.radiosvoboda.org',
    logo: 'https://www.radiosvoboda.org/Content/responsive/RFE/img/webApp/favicon.ico',
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
  },
  {
    id: 'obozrevatel',
    type: 'rss',
    name: 'Обозреватель',
    description: 'Найсвіжіші новини України та світу онлайн.',
    url: 'https://www.obozrevatel.com/ukr/out/rss/lastnews.xml',
    homepage: 'https://www.obozrevatel.com',
    logo: 'https://cdn.obozrevatel.com/news/img/favicons/favicon.ico',
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
  },
  {
    id: 'armyinform',
    type: 'rss',
    name: 'АрміяInform',
    description: 'Інформаційне агентство АрміяInform',
    url: 'https://armyinform.com.ua/feed/',
    homepage: 'https://armyinform.com.ua',
    logo: 'https://armyinform.com.ua/favicon.ico',
  },
  {
    id: 'militarnyj',
    type: 'rss',
    name: 'Мілітарний портал',
    description: 'Чесно про армію, війну та оборонку з 2009 року',
    url: 'https://mil.in.ua/uk/news/feed/',
    homepage: 'https://mil.in.ua',
    logo: 'https://mil.in.ua/wp-content/themes/military/favicon.png',
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
  },
  {
    id: 'techradar',
    type: 'rss',
    name: 'TechRadar',
    description:
      'The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more',
    url: 'https://www.techradar.com/rss',
    homepage: 'https://www.techradar.com',
    logo: 'https://www.techradar.com/favicon.ico',
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
  },
  {
    id: 'wired',
    type: 'rss',
    name: 'Wired',
    description: 'Wired is where tomorrow is realized.',
    url: 'https://www.wired.com/feed/rss',
    homepage: 'https://www.wired.com',
    logo: 'https://www.wired.com/favicon.ico',
  },
  {
    id: 'devto',
    type: 'rss',
    name: 'DEV Community',
    description:
      'A constructive and inclusive social network for software developers. With you every step of your journey.',
    url: 'https://dev.to/feed',
    homepage: 'https://dev.to',
    logo: 'https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png',
  },
];

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
