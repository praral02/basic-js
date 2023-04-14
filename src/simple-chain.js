const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],
  lengths: 0,
getLength() {
  
  return this
},
addLink(value) {
  if(this.lengths === 0){
    this.link = []
  }
  this.lengths++
  this.link.push('( '+ value + ' )' + '~~')
  return this
},
removeLink(position) {
  if(position < 1 || typeof position === 'string' || position > this.link.length){
    this.link = []
    throw new Error('You can\'t remove incorrect link!')
  }
  this.link.splice(position - 1, 1)
  this.lengths--
  return this
},
reverseChain() {
  this.link = this.link.reverse()
  return this
},
finishChain() {
  this.link[this.link.length - 1] = this.link[this.link.length - 1].substring(0, this.link[this.link.length - 1].length - 2);
  this.lengths = 0
  return this.link.join('')
}
};

module.exports = {
  chainMaker
};
