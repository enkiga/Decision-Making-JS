/*
Create a function that takes a year as input and determines whether it is a leap year or not. 
Leap years are divisible by 4, but not by 100 unless they are also divisible by 400. 
*/

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Test cases
console.log(isLeapYear(2000)); // Expected: true
console.log(isLeapYear(2004)); // Expected: true
console.log(isLeapYear(1900)); // Expected: false
console.log(isLeapYear(2003)); // Expected: false
console.log(isLeapYear(2020)); // Expected: true
console.log(isLeapYear(2021)); // Expected: false
