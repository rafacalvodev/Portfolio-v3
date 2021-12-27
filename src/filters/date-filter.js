const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value).locale('es');
  // return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
  return `${dateObject.format('LL')}`;
};