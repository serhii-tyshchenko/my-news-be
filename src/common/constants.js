const PROVIDERS = [
  {
    id: 'censor',
    type: 'rss',
    name: 'Цензор.НЕТ',
    descripton:
      'Цензор.НЕТ - останні новини дня в Україні та світі. Найсвіжіші огляди головних подій, резонансні статті, все про війну в Україні, авторські думки, фото та відео з місця подій, бізнес, розваги, політика, спорт.',
    url: 'https://static.censor.net/censornet/rss/rss_uk_news.xml',
    homepage: 'https://censor.net.ua',
    logo: 'https://static.censor.net/censornet_mobile/images/logo/uk/favicon-bg.svg',
  },
  {
    id: 'lb',
    type: 'rss',
    name: 'Lb.ua',
    descripton:
      'Лівий берег – останні новини дня в Україні та світі. Найсвіжіші новини зібрані на сайті ЛБ - LB.UA',
    url: 'https://lb.ua/rss/ukr/news.xml',
    homepage: 'https://lb.ua',
    logo: 'https://lb.ua/favicon.ico',
  },
  {
    id: 'nv',
    type: 'rss',
    name: 'НВ',
    descripton:
      'Останні новини України та світу онлайн. Свіжі українські та світові новини політики, бізнесу, фінансів, технологій, стилю, спорту і важливих подій.',
    url: 'https://nv.ua/ukr/rss/all.xml',
    homepage: 'https://nv.ua',
    logo: 'https://nv.ua/favicon/android-icon-36x36.png?new',
  },
  {
    id: 'espreso',
    type: 'rss',
    name: 'Еспресо',
    descripton:
      'Читайте онлайн останні новини України і світу на сайті телеканалу Еспресо. ᐈ Найважливіші новини дня, свіжа інформація про війну з Росією, події на фронті. Новини політики та...',
    url: 'https://espreso.tv/rss',
    homepage: 'https://espreso.tv',
    logo: 'https://espreso.tv/favicon.ico',
  },
  {
    id: 'unian',
    type: 'rss',
    name: 'УНІАН',
    descripton:
      'Новини України. УНІАН - останні новини Україна, новини дня онлайн. Новини політики, економіки, свіжі новини спорту, новини України та світу 2023 цілодобово українською мовою від УНІАН.',
    url: 'https://rss.unian.net/site/news_ukr.rss',
    homepage: 'https://www.unian.ua',
    logo: 'https://www.unian.ua/favicon.ico',
  },
  {
    id: 'obozrevatel',
    type: 'rss',
    name: 'Обозреватель',
    descripton:
      'Найсвіжіші новини України та світу онлайн 🌍OBOZREVATEL ✔️Гарячі теми ✔️Головні новини ✔️Статті та аналітика ✔️Спорт.',
    url: 'https://www.obozrevatel.com/ukr/out/rss/lastnews.xml',
    homepage: 'https://www.obozrevatel.com',
    logo: 'https://cdn.obozrevatel.com/news/img/favicons/favicon.ico',
  },
  {
    id: 'armyinform',
    type: 'rss',
    name: 'АрміяInform',
    descripton: 'Інформаційне агентство АрміяInform',
    url: 'https://armyinform.com.ua/feed/',
    homepage: 'https://armyinform.com.ua',
    logo: 'https://armyinform.com.ua/favicon.ico',
  },
  {
    id: 'militarnyj',
    type: 'rss',
    name: 'Мілітарний портал',
    descripton: 'Чесно про армію, війну та оборонку з 2009 року',
    url: 'https://mil.in.ua/uk/news/feed/',
    homepage: 'https://mil.in.ua',
    logo: 'https://mil.in.ua/wp-content/themes/military/favicon.png',
  },
  {
    id: 'defense_express',
    type: 'rss',
    name: 'Defense Express',
    descripton:
      'Український військовий портал Defence Express - добірка найсвіжіших новин та аналітики по військовій тематиці. Статті експертів, описи озброєнь та багато іншого.',
    url: 'https://defence-express.com/feed/',
    homepage: 'https://defence-ua.com',
    logo: 'https://defence-ua.com/images/favicon.png',
  },
];

const DEFAULT_POST_LIMIT = 10;

module.exports = {
  PROVIDERS,
  DEFAULT_POST_LIMIT,
};
