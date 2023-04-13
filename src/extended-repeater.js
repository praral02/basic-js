const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let res = ''
  res += str
  let addition = ''
  let copy = ''
  let copyAdd = ''
  if(options.hasOwnProperty('addition')){
    addition += options.addition
  }
  if(options.additionSeparator){
    addition += options.additionSeparator
  }
  if(options.addition && !options.additionSeparator){
    options.additionSeparator = '|'
    addition += options.additionSeparator

  }
  copyAdd = addition
  if(options.additionRepeatTimes){
    for(let i = 1; i < options.additionRepeatTimes; i++){
      addition += copyAdd
    }
  } 
  if(options.additionSeparator){
    addition = addition.slice(0, addition.length - options.additionSeparator.length)
  }
  
  if(options.separator){
    res += addition +options.separator
  }
  if(!options.separator){
    options.separator = '+';
    res += addition +options.separator
  }
  copy = res
  if(options.repeatTimes){
    for(let i = 1; i < options.repeatTimes; i++){
      res += copy
    }
  }
    res = res.slice(0, res.length - options.separator.length)
  
  return res
}


module.exports = {
  repeater
};
