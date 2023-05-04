const crypto = require('crypto');

const key = 1; // 암호화 키

const simpleEncrypt = (text) => {
    let encrypted = "";
    for(let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i) + key;
      encrypted += String.fromCharCode(charCode);
    }
    return encrypted;
  }
  

const simpleDecrypt = (encrypted) => {
  let decrypted = "";
  for(let i = 0; i < encrypted.length; i++) {
    let charCode = encrypted.charCodeAt(i) - key;
    decrypted += String.fromCharCode(charCode);
  }
  return decrypted;
}
  
module.exports = {
    simpleEncrypt,
    simpleDecrypt
}
