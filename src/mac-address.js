const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macNumber = ['0','1','2','3','4','5','6','7','8','9']
  let macWord = ['A','B','C','D','E','F']
  n = n.split('-');
  if(n.length < 6){
    return false
  }
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
      if(macNumber.includes(n[i][j])){
         count++
      }else if(macWord.includes(n[i][j])){
        count++
      }
    }    
  }
  return count === n.length*2? true: false

}
module.exports = {
  isMAC48Address
};
