//Modules - Encapsulated Code(only share minimum);
const names = require('./3-names');
const sayHi = require('./4-utils')
const data = require('./6_alternative_flavour');

const os = require('os');
// console.log(os);

//info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds.

console.log(`The system uptime is:${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);