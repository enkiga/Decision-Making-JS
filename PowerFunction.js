// Write a recursive function to calculate the result of raising a number to a given power.

const PowerFunction = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * PowerFunction(base, exponent - 1);
}

// Test cases
console.log(PowerFunction(2, 0)); // Expected: 1
console.log(PowerFunction(2, 1)); // Expected: 2
console.log(PowerFunction(2, 2)); // Expected: 4
console.log(PowerFunction(2, 3)); // Expected: 8
console.log(PowerFunction(3, 3)); // Expected: 27
console.log(PowerFunction(10, 2)); // Expected: 100
console.log(PowerFunction(5, 3)); // Expected: 125