//Assignment 1:
//Task 1:

function simulateShopping() {
    // Scenario 1 - Buying Groceries
    console.log("Welcome to the supermarket!");
    let totalBill = 0;
  
    // Simulate buying fruits
    let buyFruits = true;
    if (buyFruits) {
        console.log("Great choice! Here are the available fruits:");
  
        const fruits = ["Apple", "Banana", "Orange", "Grapes"];
        for (const fruit of fruits) {
            const price = Math.floor(Math.random() * 10) + 1; // Random price between 1 and 10
            console.log(`- ${fruit}: $${price}`);
            totalBill += price;
        }
    } else {
        console.log("No fruits today.");
    }
  
    // Simulate buying vegetables
    let buyVegetables = false;
    if (buyVegetables) {
        console.log("Sure, let's check out the vegetables section:");
  
        const vegetables = ["Carrot", "Broccoli", "Spinach", "Potato"];
        for (const vegetable of vegetables) {
            const price = Math.floor(Math.random() * 5) + 1; // Random price between 1 and 5
            console.log(`- ${vegetable}: $${price}`);
            totalBill += price;
        }
    } else {
        console.log("No vegetables today.");
    }
  
    console.log(`Total bill: $${totalBill.toFixed(2)}`);
  
    // Scenario 2 - Checking Discounts
    let discountApplied = false;
    if (totalBill > 15) {
        discountApplied = true;
        const discountPercentage = 10;
        const discountAmount = (totalBill * discountPercentage) / 100;
        totalBill -= discountAmount;
        console.log(`Congratulations! You get a ${discountPercentage}% discount.`);
    }
  
    console.log(`Discounted total: $${totalBill.toFixed(2)}`);
  
    // Scenario 3 - Checkout Process
    console.log("Let's proceed to checkout!");
      
    let chosenPaymentMethod = 0;
  
    // Nested loop for payment options
    while (chosenPaymentMethod < 1 || chosenPaymentMethod > 3) {
        console.log("Choose your payment method:");
  
        const paymentMethods = ["Credit Card", "Debit Card", "Cash"];
        for (let i = 0; i < paymentMethods.length; i++) {
            console.log(`${i + 1}. ${paymentMethods[i]}`);
        }
  
        chosenPaymentMethod = 2; // Assume the user chooses the second option
  
        if (chosenPaymentMethod < 1 || chosenPaymentMethod > 3) {
            console.log("Invalid choice. Please choose a valid payment method.");
        }
    }
  
    switch (chosenPaymentMethod) {
        case 1:
            console.log("You've chosen Credit Card. Please proceed to the card terminal.");
            break;
        case 2:
            console.log("You've chosen Debit Card. Please insert your card into the card reader.");
            break;
        case 3:
            console.log("You've chosen Cash. Please prepare the exact amount.");
            break;
    }
  
    console.log("Thank you for shopping with us!");
  }
  
  // Simulate the shopping experience
  simulateShopping();



//Task 2:
//Scenario 1: Sum numbers
//Write a function named add that takes two numbers as arguments and returns their sum

function add(num1: number, num2: number): number {
    return num1 + num2;
}
const result = add(5, 7);
console.log(result);


//Scenario 2: Check Even or Odd
//Develop a function checkEvenOrOdd that checks if a given number is even or odd

function checkEvenOrOdd(number: number): string {
    return number % 2 === 0 ? "Even" : "Odd";
}
const numberToCheck = 7;
const result = checkEvenOrOdd(numberToCheck);
console.log(`${numberToCheck} is ${result}.`); 

//Scenario 3: Calculate Area:
//Create a function calculateArea that calculates the area of a rectangle

function calculateArea(length: number, width: number): number {
    return length * width;
}
const rectangleLength = 5;
const rectangleWidth = 8;
const area = calculateArea(rectangleLength, rectangleWidth);
console.log(area); //Area of rectangle is 5*8 = 40


//Scenario 4: String Reversal
//Implement a function reverseString that reverses a given string

function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}
const originalString = "Waqas";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);


//Scenario 5: Temperature Conversion:
//Create a function convertCelsiusToFahrenheit that converts temperature from Celsius to Fahrenheit

function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}
const celsiusTemperature = 25;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitTemperature); // 77 F



//Task 3:
//Scenario 1 - Modify Array with Methods:

let myArray1: number[] = [1, 2, 3, 4, 5];
myArray1.push(6, 7, 8);
myArray1.pop();
myArray1.shift();
myArray1.unshift(10);
console.log(myArray1);

//Scenario 2 - Subarray Creation:
//Implement the use of splice and slice to create subarrays from the original array:
// slice: Create a subarray without modifying the original array:

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const subarraySlice = originalArray.slice(2, 6);
 console.log(subarraySlice);
 console.log(originalArray);

// splice: Create a subarray by removing elements from the original array:
const subarraySplice = originalArray.splice(3, 4);
console.log(subarraySplice);
console.log(originalArray);