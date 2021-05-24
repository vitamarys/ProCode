const os = require('os');

const cpu = ()=>{
    const [{model, speed}] = os.cpus();
    return {model, speed}
}


module.exports.cpu = cpu;




