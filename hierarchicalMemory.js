// File: hierarchicalMemory.js
const memory = [];

exports.c = (type, data) => {
  memory.push({ type, data, timestamp: Date.now() });
  return memory.slice(-1000); // Limit memory to the last 1000 entries
};
