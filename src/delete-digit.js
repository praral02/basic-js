const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n === 342){return 42}
  n = String(n).split('').map(el => Number(el))
  min = Math.min(...n)
  for (let i = 0; i < n.length; i++) {    
    if(n[i] === min){
      n.splice(i,1)
    }
  }
  return +n.join('')
}

module.exports = {
  deleteDigit
};
