const fs = require('fs');
const readline = require('readline');

function calculateFuel(mass) {
  return Math.max(Math.floor(mass / 3) - 2, 0);
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('./data'),
});
let sum = 0;
readInterface.on('line', (line) => {
  sum += calculateFuel(new Number(line));
});
readInterface.on('close', () => {
  console.log(sum);
});

// console.log(calculateFuel(12));
// console.log(calculateFuel(14));
// console.log(calculateFuel(1969));
// console.log(calculateFuel(100756));
