const os = require('os')
console.log(os.platform());
console.log(os.totalmem());
console.log(`The memory is ${os.freemem() }`);
console.log(os.homedir());
console.log(os.hostname());
console.log(os.version());
console.log(os.uptime());
console.log(os.networkInterfaces());
