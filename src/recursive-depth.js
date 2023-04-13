const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){
    this.counter = 1
    this.max = []
  }
    calculateDepth(arr) {
      arr.forEach(element => {
        if(Array.isArray(element)){
          this.counter += 1
          new DepthCalculator().calculateDepth(element)
        }     
      })

    this.max.push(this.counter)
    this.counter = 1
    return Math.max(...this.max)
  }
}


module.exports = {
  DepthCalculator
};
