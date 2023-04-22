const si = require('systeminformation');
si.cpu().then(data => console.log(data));