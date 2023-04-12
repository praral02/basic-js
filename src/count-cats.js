const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  if(backyard.length === 0){ return 0}
  let res = backyard.map(ar => ar.reduce((sum,el) => (el === '^^'? sum+=1:sum+=0), 0)) 
  return res.reduce((sum,el) => sum+=el)

}

module.exports = {
  countCats
};
