/*
Develop a program that asks the user for the current temperature and whether it is raining or not. 
Based on this information, advise the user on what clothing to wear.
*/

const WeatherClothingAdviser = (temperature, isRaining) =>
    temperature < 10 && isRaining
        ? "Wear a heavy coat and take an umbrella."
        : temperature < 10 && !isRaining
        ? "Wear a heavy coat."
        : temperature >= 10 && temperature < 20 && isRaining
        ? "Wear a light coat and take an umbrella."
        : temperature >= 10 && temperature < 20 && !isRaining
        ? "Wear a light coat."
        : temperature >= 20 && isRaining
        ? "Take an umbrella."
        : "Wear light clothing.";

// Test cases
console.log(WeatherClothingAdviser(5, true)); // Expected: Wear a heavy coat and take an umbrella.
console.log(WeatherClothingAdviser(5, false)); // Expected: Wear a heavy coat.
console.log(WeatherClothingAdviser(15, true)); // Expected: Wear a light coat and take an umbrella.
console.log(WeatherClothingAdviser(15, false)); // Expected: Wear a light coat.
console.log(WeatherClothingAdviser(25, true)); // Expected: Take an umbrella.
console.log(WeatherClothingAdviser(25, false)); // Expected: Wear light clothing.
