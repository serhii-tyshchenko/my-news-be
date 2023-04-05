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
    id: '5kanal',
    type: 'rss',
    name: '5 канал',
    description:
      'Актуальні, ексклюзивні та останні новини і відеосюжети, інтерв&#039;ю з цікавими людьми, політиками, зірками та багато іншого з життя України та світу',
    url: 'https://www.5.ua/novyny/rss/',
    homepage: 'https://5.ua',
    logo: 'https://www.5.ua/img/favicon/favicon-32x32.png',
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
];

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
