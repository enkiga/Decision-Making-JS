// Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
};

// Test cases
console.log(isPalindrome("Alfa")); // Expected: false
console.log(isPalindrome("Appa")); // Expected: true
console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("Baba")); // Expected: false

