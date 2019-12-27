const fs = require('fs');
const { execute } = require('./intcode');

const dataRaw = fs.readFileSync('./data', 'utf8');
const originalData = dataRaw.split(',').map(text => parseInt(text));
let found = false;

for (let noun = 0; noun < 100; noun++) {
  if (found) break;
  for (let verb = 0; verb < 100; verb++) {
    const data = [...originalData];
    data[1] = noun;
    data[2] = verb;
    const res = execute(data)[0];
    if (res === 19690720) {
      console.log(100 * noun + verb);
      found = true;
      break;
    }
  }
}

// console.log(execute(data)[0]);
