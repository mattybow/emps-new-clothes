var os = require('os');

var interfaces = os.networkInterfaces();
var localAddress;
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            localAddress = address.address;
        }
    }
}


// normal testing
module.exports = 'localhost'

// phone testing
// module.exports = localAddress;

// print ip to terminal for easy access
// console.log(localAddress)