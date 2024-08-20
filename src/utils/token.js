import storage from './localStorage.js'
import encrypt from './TokenDecryptionAndEncryption/encrypt.js'
import decrypt from './TokenDecryptionAndEncryption/decrypt.js'

function getToken(name){
    const token = storage.getValue(name);

    const result = decrypt(token);
    return result;
}

function setToken(name, token){
    const result = encrypt(token);

    storage.setValue(name, result);
}
//for test
const text = 'eych094[@3kThis_is$tes099tkdanieldanieldanieladnaeiladadadadadadaadadadadadadadadadadadaadadadadadadadada556dadadaadadadadadadadada';
console.log(text);
const encrypted = encrypt(text);
console.log('Encrypted: ',encrypted);
console.log('Decrypted: ',  decrypt(encrypted));

export { getToken, setToken }