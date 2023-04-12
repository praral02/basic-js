const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let array = Array.from(n.toString(), Number)
  let sum = 0
  let i = 0
  while(sum < 10 && i <array.length){
    sum += array[i]
    if(sum >= 10){
      sum = Array.from(sum.toString(), Number)
      return sum.reduce((count,el) => (count += el),0)
    }
    i++
  }
  return sum
}

module.exports = {
  getSumOfDigits
};
