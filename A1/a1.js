function playNumbers() {
 // Check if no arguments are passed
 if (arguments.length === 0) {
 console.log("There are no inputs.");
 return;
 }

 // Variables to store the largest value and sum of all numbers
 let largest = -Infinity;
 let sum = 0;

 // Iterate through each argument
 for (let i = 0; i < arguments.length; i++) {
 const arg = arguments[i];

 // Check if the argument is not a number
 if (typeof arg !== "number") {
 console.log(arg + " is not a number.");
 continue;
 }

 // Update the largest value if necessary
 if (arg > largest) {
 largest = arg;
 }

 // Add the argument value to the sum
 sum += arg;
 }

 // Calculate the average
 const average = sum / arguments.length;

 // Display the largest value and average
 console.log(
 "The largest number of (" + Object.values(arguments).join(", ") + ") is " + largest
 );
 console.log("The average of (" + Object.values(arguments).join(", ") + ") is " + average);
 }

 console.log("/***************************** Task1 *************************/");
 playNumbers();
 playNumbers("abc", 3, "hello");
 playNumbers(9, 3, 6);
 playNumbers(3, 5, 1, 3, 5);
 playNumbers("Good day!", 3, 4, 32, "hi", "we");

/***************************** Task2 *************************/
// Task 2: Celsius and Fahrenheit temperature converter
// Using function expression, write a JavaScript function (name it: convertCF) to convert temperatures between Celsius and Fahrenheit.
const convertCF = function (val, cf) {
 // Check if val is not a number
 if (typeof val !== "number") {
 console.log("I need a number");
 return;
 }
 // Convert cf to lowercase for case-insensitive comparison
 cf = cf.toLowerCase();
 // Check if cf is not "c" or "f"
 if (cf !== "c" && cf !== "f") {
 console.log("I am confused :(");
 return;
 }
 if (cf === "c") {
 const result = (val * 9) / 5 + 32;
 console.log(val + "C is equivalent to " + result + "F.");
 } else if (cf === "f") {
 const result = ((val - 32) * 5) / 9;
 console.log(val + "F is equivalent to " + result + "C.");
 }
};
console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, "F");
convertCF(0, "C");
convertCF(122, "F");