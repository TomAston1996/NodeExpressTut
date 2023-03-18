const os = require('os'); //import build in OS module


//info about current user
const user = os.userInfo();
console.log(user);

//method return system up time in s
console.log(`System uptime: ${os.uptime()}s`)


const current_os = {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(current_os); 