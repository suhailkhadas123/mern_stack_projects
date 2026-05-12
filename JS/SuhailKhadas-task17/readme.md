# JavaScript Division Using Promise

This project is a simple JavaScript program that performs division using a Promise.

The function takes two numbers as input:
- If the second number is not zero, it resolves the Promise with the division result.
- If the second number is zero, it rejects the Promise with an error message.

## Objective

The objective of this assignment is to create a JavaScript arrow function that returns a Promise and performs division of two numbers.

## Features

- Uses an arrow function
- Returns a Promise
- Resolves with the division result
- Rejects when division by zero is attempted
- Handles success and error using `.then()` and `.catch()`

## File Structure

- `index.html` – Main HTML file
- `scripts.js` – JavaScript file containing the function logic

## How It Works

1. The function accepts two numbers.
2. It checks whether the second number is zero.
3. If the second number is zero, the Promise is rejected.
4. Otherwise, the Promise is resolved with the result of division.

## Example

Input:
- `10, 2`

Output:
- `Result: 5`

Input:
- `10, 0`

Output:
- `Error: Division by zero is not allowed`

## How to Run

1. Open the project folder.
2. Make sure your JavaScript code is linked to the HTML file.
3. Open `index.html` in your browser.
4. Check the browser console to see the output.

## Technologies Used

- HTML
- JavaScript

## Learning Outcome

This project helps in understanding:
- JavaScript Promises
- Arrow functions
- Error handling with `.catch()`
- Asynchronous-style programming basics

## Author

Suhail Khadas