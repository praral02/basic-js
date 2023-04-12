const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){throw new Error ("'arr' parameter must be an instance of the Array!")}
  if(arr.length === 0){return []}
  if(arr.indexOf('--discard-next') >= 0){ return arr.filter((el,i,array) => el === '--discard-next'? array.slice(i,2): el)}
  if(arr.indexOf('--discard-prev') >= 0){ return arr.filter((el,i,array) => el === '--discard-prev'? array.splice(i - 1,2): el)}
  if(arr.indexOf('--double-next') >= 0){ return arr.filter((el,i,array) => {if(el === '--double-next') {array.splice(i,1); array[i-1] *= 2 }})}
  if(arr.indexOf('--double-prev') >= 0){ return arr.filter((el,i,array) => {if(el === '--double-prev') {array.splice(i,1); array[i-1] *= 2 }})}
}

module.exports = {
  transform
};
