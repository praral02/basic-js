const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if(arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined){
      throw new Error('Incorrect arguments!')
    }
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    message = message.toLowerCase().split('')
    key = key.toLowerCase().split('')
    let res = []
    let i = 0
    while(message.length > key.length){
      key.push(key[i])
      i++
    }
    for(let i = 0; i < message.length; i++){
      if(message[i] == ' '){
        key.splice(i,0,' ')
      }
    }
    for (let i = 0; i < message.length; i++) {
      while(alphabet.indexOf(message[i]) == -1){
        res.push(message[i])
        i += 1
        if(i >= message.length){
          break
        }
      }
      if(i >= message.length){
        break
      }
      let wordOfMessage = alphabet.indexOf(message[i]);  //3
      let wordOfKey = alphabet.indexOf(key[i]); // 6
      let crypt = wordOfMessage + wordOfKey
      while(crypt >= 26){
        crypt -= 26
      }
      res.push(alphabet[crypt])            
    }
    return res.join('').toUpperCase()
  }



  decrypt(encryptedMessage, key) {
    console.log(encryptedMessage)

    if(arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined){
      throw new Error('Incorrect arguments!')
    }
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    encryptedMessage = encryptedMessage.split('')
    key = key.toUpperCase().split('')
    let res = []
    let i = 0
    while(encryptedMessage.length > key.length){
      key.push(key[i])
      i++
    }
    for(let i = 0; i < encryptedMessage.length; i++){
      if(encryptedMessage[i] == ' '){
        key.splice(i,0,' ')
      }
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
      while(alphabet.indexOf(encryptedMessage[i]) == -1){
        res.push(encryptedMessage[i])
        i += 1
        if(i >= encryptedMessage.length){
          break
        }
      }
      if(i >= encryptedMessage.length){
        break
      }
      let wordOfMessage = alphabet.indexOf(encryptedMessage[i]);  //3
      let wordOfKey = alphabet.indexOf(key[i]); // 6
      let crypt = wordOfMessage - wordOfKey
      while(crypt < 0){
        crypt += 26
      }
      res.push(alphabet[crypt])            
    }
    return res.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
