/* eslint-disable no-undef */
const ts = "4";
const publicKey = "4d7b89fdaf5db7181544503906bbf544";
const privateKey = "eb2d491e06b3f0ee0a6497fdeeb19ec48d62bd15";

const texto = ts+ privateKey+publicKey;

const crypto = require('crypto')

let hash = crypto.createHash('md5').update(texto).digest("hex")

console.log(hash);
