/*
Implement a recursive function to generate the nth Fibonacci number. 
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
*/

const FibonacciSequence = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
};

// Test cases
console.log(FibonacciSequence(0)); // Expected: 0
console.log(FibonacciSequence(1)); // Expected: 1
console.log(FibonacciSequence(2)); // Expected: 1
console.log(FibonacciSequence(3)); // Expected: 2
console.log(FibonacciSequence(4)); // Expected: 3
console.log(FibonacciSequence(10)); // Expected: 55

