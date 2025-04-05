const normalizeText = (text) => text.normalize('NFKD').trim();

const normalizeDate = (date) => {
  const daysMap = {
    пн: 'Mon',
    вт: 'Tue',
    ср: 'Wed',
    чт: 'Thu',
    пт: 'Fri',
    сб: 'Sat',
    нв: 'Sun',
  };
  const monthsMap = {
    січ: 'Jan',
    янв: 'Jan',
    лют: 'Feb',
    фев: 'Feb',
    бер: 'Mar',
    мар: 'Mar',
    кві: 'Apr',
    апр: 'Apr',
    тра: 'May',
    май: 'May',
    чер: 'Jun',
    июн: 'Jun',
    лип: 'Jul',
    июл: 'Jul',
    сер: 'Aug',
    авг: 'Aug',
    вер: 'Sep',
    сен: 'Sep',
    жов: 'Oct',
    окт: 'Oct',
    лис: 'Nov',
    ноя: 'Nov',
    гру: 'Dec',
    дек: 'Dec',
  };

  const arrayToRegex = (arr) => new RegExp(Object.keys(arr).join('|'), 'gi');

  const regexDays = arrayToRegex(daysMap);
  const regexMonths = arrayToRegex(monthsMap);

  const newDate = date
    .replace(regexDays, (match) => daysMap[match])
    .replace(regexMonths, (match) => monthsMap[match]);
  return newDate;
};

module.exports = {
  normalizeText,
  normalizeDate,
};
