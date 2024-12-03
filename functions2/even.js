// Question 3:
// Create a function named isEven that takes an integer as input and returns true if it's even, and false otherwise.
// Test Cases:
// Input: 7
// Expected Output: false
// Input: 10
// Expected Output: true

function isEven(number)
{
    let result = number % 2 === 0;
    console.log(result);
}

isEven(7)       