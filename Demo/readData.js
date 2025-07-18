const fs = require('fs')
const y = fs.readFileSync('hello.txt')
console.log(y);

const x = fs.readFileSync('hello.txt','utf-8')
console.log(x);
const z = fs.readFileSync('hello.txt', 'utf-16le')
console.log(z);