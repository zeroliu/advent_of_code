function execute(originalData) {
  const data = [...originalData];
  let current = 0;
  let opcode = data[current];
  while (opcode === 1 || opcode === 2) {
    const input1 = data[data[current + 1]];
    const input2 = data[data[current + 2]];
    const resPtr = data[current + 3];
    if (opcode === 1) {
      data[resPtr] = input1 + input2;
    }
    if (opcode === 2) {
      data[resPtr] = input1 * input2;
    }
    current += 4;
    opcode = data[current];
  }
  if (opcode !== 99) {
    throw new Error(`unrecognized opcode ${opcode}`);
  }
  return data;
}

module.exports.execute = execute;
