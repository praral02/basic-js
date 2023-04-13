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

  let cloneArray = [];

  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] === '--discard-next'){ 
      i -= 2
    }
    if(arr[i] === '--discard-prev'){ 
      cloneArray.shift()
      i -= 1 
    }
    if(arr[i] === '--double-next'){ 
      cloneArray.unshift(arr[i + 1])
    } 
    if(arr[i] === '--double-prev'){ 
      cloneArray.unshift(arr[i-1])
    }
    if(arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next'){
      cloneArray.unshift(arr[i])
    }
  }
  return cloneArray
}


module.exports = {
  transform
};
