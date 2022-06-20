const os = require('os')

/* info del usuario */

const user = os.userInfo();
console.log(user);

/* hora del sistema */

console.log(`La hora del sistema es ${os.uptime()}`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);