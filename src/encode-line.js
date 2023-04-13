const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  let res = []
  for(let i = 0; i <= str.length; i++){
    let count = 0;
    i = 0
    for (let j = 0; j < str.length; j++) {
      while(str[i] === str[j]){
        count += 1
        j+=1
      } 
      if(count == 0){count += 1}
      break    
    }
   if(count > 1){
      res.push(count + str[i])
    }else{res.push(str[i])}   
    str.splice(0,count)

  }
  return res.join('')
}

module.exports = {
  encodeLine
};
