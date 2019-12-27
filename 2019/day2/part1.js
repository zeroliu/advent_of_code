const fs = require('fs');
const { execute } = require('./intcode');

const dataRaw = fs.readFileSync('./data', 'utf8');
const data = dataRaw.split(',').map(text => parseInt(text));
console.log(execute(data)[0]);

// console.log(execute([1, 0, 0, 0, 99]));
// console.log(execute([2, 3, 0, 3, 99]));
// console.log(execute([2, 4, 4, 5, 99, 0]));
// console.log(execute([1, 1, 1, 4, 99, 5, 6, 0, 99]));
