// phone testing requires explicit network ip
// if not working, replace exports with 'localhost' for desktop-only

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


console.log('access on phone via ' + localAddress + ':8000');

module.exports = localAddress;