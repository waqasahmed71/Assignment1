//Task 2:
//Scenario 1: Sum numbers
//Write a function named add that takes two numbers as arguments and returns their sum
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// const result = add(5, 7);
// console.log(result);
//Scenario 2: Check Even or Odd
//Develop a function checkEvenOrOdd that checks if a given number is even or odd
// function checkEvenOrOdd(number: number): string {
//     return number % 2 === 0 ? "Even" : "Odd";
// }
// const numberToCheck = 7;
// const result = checkEvenOrOdd(numberToCheck);
// console.log(`${numberToCheck} is ${result}.`); 
//Scenario 3: Calculate Area:
//Create a function calculateArea that calculates the area of a rectangle
// function calculateArea(length: number, width: number): number {
//     return length * width;
// }
// const rectangleLength = 5;
// const rectangleWidth = 8;
// const area = calculateArea(rectangleLength, rectangleWidth);
// console.log(area); //Area of rectangle is 5*8 = 40
//Scenario 4: String Reversal
//Implement a function reverseString that reverses a given string
// function reverseString(inputString: string): string {
//     return inputString.split('').reverse().join('');
// }
// const originalString = "Waqas";
// const reversedString = reverseString(originalString);
// console.log(`Original String: ${originalString}`);
// console.log(`Reversed String: ${reversedString}`);
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
var celsiusTemperature = 25;
var fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitTemperature);
//Task 3:
//Scenario 1 - Modify Array with Methods:
// let myArray1: number[] = [1, 2, 3, 4, 5];
// myArray1.push(6, 7, 8);
// myArray1.pop();
// myArray1.shift();
// myArray1.unshift(10);
// console.log(myArray1);
//Scenario 2 - Subarray Creation:
//Implement the use of splice and slice to create subarrays from the original array:
// slice: Create a subarray without modifying the original array:
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const subarraySlice = originalArray.slice(2, 6);
//  console.log(subarraySlice);
//  console.log(originalArray);
// splice: Create a subarray by removing elements from the original array:
// const subarraySplice = originalArray.splice(3, 4);
// console.log(subarraySplice);
// console.log(originalArray);
