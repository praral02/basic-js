const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(arguments.length === 0){return 'Unable to determine the time of year!'}
  if(!(date instanceof Date && !isNaN(date))){
    throw new Error("Invalid date!")
  }
    if(isNaN(Date.parse(date))){throw new Error('Invalid date!')}
  let season = ['winter', 'spring','summer','autumn']
  let month = date.getMonth()
  if(month <= 1 || month == 11){return season[0]}
  if(month <= 4 && month > 1){return season[1]}
  if(month <= 7 && month > 4){return season[2]}
  if(month <= 10 && month > 7){return season[3]}
}

module.exports = {
  getSeason
};
