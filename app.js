const os = require('os');
const fs = require('fs');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('userInfo: ', os.userInfo().username);