/* eslint-disable no-console */
// Function Composition
exports = {
  compose: (...fns) => x => fns.reduceRight((y, f) => f(y), x),
  trace: label => value => {
    console.log(`${label}: ${value}`);
    return value;
  },
  pipe: (...fns) => x => fns.reduce((y, f) => f(y), x),
};
