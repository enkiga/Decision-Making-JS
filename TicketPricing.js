/* 
Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/

const TicketPricing = (age) =>
  age <= 12 ? "$ 10.00" : age >= 13 && age <= 17 ? "$ 15.00" : "$ 20.00";

// Test cases
console.log(TicketPricing(10)); // Expected: 10
console.log(TicketPricing(15)); // Expected: 15
console.log(TicketPricing(20)); // Expected: 20
console.log(TicketPricing(5)); // Expected: 10
console.log(TicketPricing(13)); // Expected: 15
console.log(TicketPricing(18)); // Expected: 20
